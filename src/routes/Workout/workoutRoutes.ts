// src/routes/Workout/WorkoutRoutes.ts
import { Router } from 'express';
import { workController } from '../../controllers';  // Import from controllers index

const router = Router();

router.post('/', workController.createWorkout);  // Access via workController
router.get('/', workController.getAllWorkouts);
router.get('/:id', workController.getWorkoutById);
router.get('/recommendations', workController.getWorkoutRecommendations);

export default router;
