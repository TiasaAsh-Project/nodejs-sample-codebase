import { Document } from 'mongoose';

export interface IExercise extends Document {
  name: string;
  description: string;
  duration: number; // in minutes
  caloriesBurned: number; // optional
}

export interface ICreateExerciseRequest {
  name: string;
  description: string;
  duration: number;
  caloriesBurned?: number;
}
