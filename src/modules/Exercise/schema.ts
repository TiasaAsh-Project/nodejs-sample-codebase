import mongoose, { Schema } from 'mongoose';
import { IExercise } from './model';

const ExerciseSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true }, // in minutes
    caloriesBurned: { type: Number, default: 0 }, // optional
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IExercise>('Exercise', ExerciseSchema, 'exercises');
