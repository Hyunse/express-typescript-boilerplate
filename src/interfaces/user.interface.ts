import { ObjectId } from 'mongoose';

export interface User {
    id: ObjectId;
    name: string;
    password: string;
    country: string;
    email: string;
  }