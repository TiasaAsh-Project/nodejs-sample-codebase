import { Router } from 'express';
import {router } from './auth';
import { userService } from './user';
import {router1} from './Exercise';
import {} from './Progress';
import {} from './Progress';

const v1Router = Router();

v1Router.use('/auth', router);
v1Router.use('/user', userService);

// All routes go here


