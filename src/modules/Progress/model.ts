import { Document, Types } from 'mongoose';

export interface IProgress extends Document {
  userId: Types.ObjectId;
  date: Date;
  exercises: IExerciseProgress[];
  totalDuration: number;
  totalCaloriesBurned: number;
}

interface IExerciseProgress {
  exerciseId: Types.ObjectId;
  sets: number;
  reps: number;
  duration: number; // in minutes
  caloriesBurned: number; // optional
}

export interface ICreateProgressRequest {
  userId: string;
  date: Date;
  exercises: IExerciseProgress[];
  totalDuration: number;
  totalCaloriesBurned: number;
}
