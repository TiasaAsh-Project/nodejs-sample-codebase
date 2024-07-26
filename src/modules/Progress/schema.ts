import mongoose, { Schema } from 'mongoose';
import { IProgress } from './model';

const ProgressSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    date: { type: Date, required: true },
    exercises: [{
      exerciseId: { type: Schema.Types.ObjectId, required: true, ref: 'Exercise' },
      sets: { type: Number, required: true },
      reps: { type: Number, required: true },
      duration: { type: Number, required: true }, // in minutes
      caloriesBurned: { type: Number, default: 0 }, // optional
    }],
    totalDuration: { type: Number, required: true }, // in minutes
    totalCaloriesBurned: { type: Number, default: 0 }, // optional
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IProgress>('Progress', ProgressSchema, 'progress');
