import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import WorkoutModel from '@modules/Workout/schema';



/**
 * This function creates a new workout
 * @param req
 * @param res
 */
export const createWorkout = controller(async (req: Request, res: Response): Promise<void> => {
  const workoutDetails = req.body;
  const workout = new WorkoutModel(workoutDetails);

  await workout.save();
  res.status(201).json({
    message: 'Workout created successfully',
    workout,
  });
});

/**
 * This function retrieves all workouts for a user
 * @param req
 * @param res
 */
export const getAllWorkouts = controller(async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const workouts = await WorkoutModel.find({ userId });
  res.status(200).json(workouts);
});

/**
 * This function retrieves a specific workout
 * @param req
 * @param res
 */
export const getWorkoutById = controller(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const workout = await WorkoutModel.findById(id);
  
  if (!workout) {
    res.status(404).json({
      message: 'Workout not found',
    });
  } else {
    res.status(200).json(workout);
  }
});
