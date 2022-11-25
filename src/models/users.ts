import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUser extends Document {
  id: ObjectId;
  name: string;
  password: string;
  country: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default mongoose.model<IUser>('Users', UserSchema);
