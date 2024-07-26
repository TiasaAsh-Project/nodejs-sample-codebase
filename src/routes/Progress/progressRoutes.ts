import { Router } from 'express';
import { getProgressForUser } from '@controllers/Progress/ProgressController';

const router2 = Router();

router2.get('/:userId', getProgressForUser);

export default router2;
