import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { getExerciseById as getExerciseByIdService, getAllExercises as getAllExercisesService } from '@services/Exercise/exerciseService';

/**
 * Get all exercises
 * @param req
 * @param res
 */
export const getAllExercises = controller(async (req: Request, res: Response): Promise<void> => {
  const exercises = await getAllExercisesService();
  res.status(200).json(exercises);
});

/**
 * Get exercise by ID
 * @param req
 * @param res
 */
export const getExerciseById = controller(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const exercise = await getExerciseByIdService(id);

  if (!exercise) {
    res.status(404).json({ message: 'Exercise not found' });
  } else {
    res.status(200).json(exercise);
  }
});
