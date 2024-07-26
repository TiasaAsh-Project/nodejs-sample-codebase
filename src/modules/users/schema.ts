import mongoose, { Schema } from 'mongoose';
import { IUser } from './model';

const UserSchema: Schema = new Schema(
  {
    name: {
      first: { type: String, required: true, trim: true },
      last: { type: String, required: true, trim: true },
    },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IUser>('User', UserSchema, 'users');
