import mongoose, { Schema, Document } from 'mongoose';
import { User } from '@interface/user.interface'
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

const UserModel = mongoose.model<User & Document>('User', UserSchema);

export default UserModel
