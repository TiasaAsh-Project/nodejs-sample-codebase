import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import ProgressModel from '@modules/Progress/schema';

/**
 * This function retrieves progress for a particular user
 * @param req
 * @param res
 */
export const getProgressForUser = controller(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const progress = await ProgressModel.find({ userId: id });
  
  if (!progress) {
    res.status(404).json({
      message: 'Progress not found',
    });
  } else {
    res.status(200).json(progress);
  }
});
