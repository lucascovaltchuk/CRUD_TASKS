import { Router } from 'express';
import * as UserController from './controllers/UserController';
import * as TaskController from './controllers/TaskController';
import * as CategoryController from './controllers/CategoryController';

const router = Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.post('/tasks', TaskController.createTask);
router.get('/tasks/user/:userId', TaskController.getTasksByUserId);
router.get('/tasks/:id', TaskController.getTaskById);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);
router.get('/tasks/filter/category/:categoryId', TaskController.filterTasksByCategory);
router.get('/tasks/completed', TaskController.getCompletedTasks);
router.get('/tasks/pending', TaskController.getPendingTasks);
router.get('/tasks/due/:startDate/:endDate', TaskController.getTasksDueInPeriod);
router.get('/tasks/count/user/:userId', TaskController.countTasksByUserId);
router.get('/tasks/latest/user/:userId', TaskController.getLatestTaskByUserId);
router.get('/tasks/average-completion', TaskController.calculateAverageCompletion);
router.get('/tasks/longest-description', TaskController.getLongestDescriptionTask);
router.get('/tasks/group-by-category', TaskController.groupTasksByCategory);
router.get('/tasks/oldest/user/:userId', TaskController.getOldestTaskByUserId);
router.post('/categories', CategoryController.createCategory);
router.get('/categories/user/:userId', CategoryController.getCategoriesByUserId);
router.get('/categories/:id', CategoryController.getCategoryById);
router.put('/categories/:id', CategoryController.updateCategory);
router.delete('/categories/:id', CategoryController.deleteCategory);

export default router;
