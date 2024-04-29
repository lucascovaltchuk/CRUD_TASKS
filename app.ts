import express from 'express';
import pool from './db';
import routes from './routes';
class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.database();
    this.routes();
  }

  public middleware() {
    this.express.use(express.json());
  }

  public async database() {
    try {
      await pool.getConnection();
      console.log('Connected');
    } catch (error) {
      console.error('Error to connect: ', error);
    }
  }

  public routes() {
    this.express.use('/api', routes);
  }
}

export default new App().express;
