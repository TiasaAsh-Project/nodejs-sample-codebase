// src/controllers/index.ts
import * as authController from './auth';
import * as userController from './user';
import * as exerciseController from './Exercise';
import * as workController from './workout';  // Correct path
import * as progressController from './Progress';

export { authController, userController, exerciseController, workController, progressController };
