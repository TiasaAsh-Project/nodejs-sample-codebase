import { Router } from 'express';
import { getAllExercises, getExerciseById} from '@controllers/Exercise/ExerciseController';

const router1 = Router();

router1.get('/', getAllExercises);
router1.get('/:id', getExerciseById);

export default router1;
