import ExerciseModel from '@modules/Exercise/schema';
import { IExercise } from '@modules/Exercise/model';

/**
 * Retrieves all exercises from the database
 * @returns Promise<IExercise[]>
 */
export const getAllExercises = async (): Promise<IExercise[]> => {
  return ExerciseModel.find();
};

/**
 * Retrieves a specific exercise by its ID
 * @param id - Exercise ID
 * @returns Promise<IExercise | null>
 */
export const getExerciseById = async (id: string): Promise<IExercise | null> => {
  return ExerciseModel.findById(id);
};
