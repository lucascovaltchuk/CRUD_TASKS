import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';
import { Task } from '../models/Task';

const taskService = new TaskService();

export async function createTask(req: Request, res: Response) {
  try {
    const { title, description, creationDate, completionDate, type, category, status, userId } = req.body;
    const newTask = await taskService.createTask(new Task(0, title, description, creationDate, completionDate, type, category, status, userId));
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getTasksByUserId(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const tasks = await taskService.getTasksByUserId(userId);
    res.json(tasks);
  } catch (error) {
    console.error('Error getting tasks by user id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getTaskById(req: Request, res: Response) {
  try {
    const taskId = parseInt(req.params.id);
    const task = await taskService.getTaskById(taskId);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }
    res.json(task);
  } catch (error) {
    console.error('Error getting task by id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const taskId = parseInt(req.params.id);
    const { title, description, creationDate, completionDate, type, category, status, userId } = req.body;
    const updatedTask = await taskService.updateTask(taskId, new Task(taskId, title, description, creationDate, completionDate, type, category, status, userId));
    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const taskId = parseInt(req.params.id);
    await taskService.deleteTask(taskId);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
