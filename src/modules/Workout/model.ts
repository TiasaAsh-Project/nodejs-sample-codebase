import { Document, Types } from 'mongoose';

export interface IWorkout extends Document {
  userId: Types.ObjectId;
  name: string;
  exercises: IExercise[];
}

interface IExercise {
  exerciseId: Types.ObjectId;
  sets: number;
  reps: number;
  duration: number; // in minutes
}

export interface ICreateWorkoutRequest {
  userId: string;
  name: string;
  exercises: IExercise[];
}
