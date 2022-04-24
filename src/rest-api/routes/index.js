import express from 'express';
import taskController from '../controllers/taskController.js';

export const router = express.Router();

router.post('/todo', taskController.store);
