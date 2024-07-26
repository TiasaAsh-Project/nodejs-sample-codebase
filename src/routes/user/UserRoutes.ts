export { default as UserRoutes } from './UserRoutes';
import { Router } from 'express';
import { getCurrentUser } from '@controllers/user/UserController';

const router = Router();

router.get('/:id', getCurrentUser);

export default router;
