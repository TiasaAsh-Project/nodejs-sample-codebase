import mongoose, { Schema } from 'mongoose';
import { IWorkout } from './model';

const WorkoutSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    exercises: [{
      exerciseId: { type: Schema.Types.ObjectId, required: true, ref: 'Exercise' },
      sets: { type: Number, required: true },
      reps: { type: Number, required: true },
      duration: { type: Number, required: true }, // in minutes
    }],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IWorkout>('Workout', WorkoutSchema, 'workouts');
