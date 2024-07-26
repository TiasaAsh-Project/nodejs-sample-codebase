import ProgressModel from '@modules/Progress/schema';
import { IProgress } from '@modules/Progress/model';

/**
 * Retrieves progress for a specific user ID
 * @param userId - User ID
 * @returns Promise<IProgress[]>
 */
export const getProgressForUser = async (userId: string): Promise<IProgress[]> => {
  return ProgressModel.find({ userId });
};

/**
 * Save progress for a user
 * @param progressData - Progress data
 * @returns Promise<IProgress>
 */
export const saveProgress = async (progressData: IProgress): Promise<IProgress> => {
  const progress = new ProgressModel(progressData);
  return progress.save();
};
