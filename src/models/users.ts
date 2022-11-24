import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUser extends Document {
  id: ObjectId;
  name: string;
  password: string;
  country: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, required: false },
  updatedAt: { type: Date, required: false }
});

export default mongoose.model<IUser>('Users', UserSchema);
