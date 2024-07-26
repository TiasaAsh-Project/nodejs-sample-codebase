import WorkoutModel from '@modules/Workout/schema';
import { IWorkout } from '@modules/Workout/model';

/**
 * Creates a new workout in the database
 * @param workoutData - Workout data
 * @returns Promise<IWorkout>
 */
export const createWorkout = async (workoutData: IWorkout): Promise<IWorkout> => {
  const workout = new WorkoutModel(workoutData);
  return workout.save();
};

/**
 * Retrieves all workouts for a specific user ID
 * @param userId - User ID
 * @returns Promise<IWorkout[]>
 */
export const getAllWorkoutsForUser = async (userId: string): Promise<IWorkout[]> => {
  return WorkoutModel.find({ userId });
};

/**
 * Retrieves a specific workout by its ID
 * @param id - Workout ID
 * @returns Promise<IWorkout | null>
 */
export const getWorkoutById = async (id: string): Promise<IWorkout | null> => {
  return WorkoutModel.findById(id);
};
