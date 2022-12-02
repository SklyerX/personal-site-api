import { Document } from 'mongoose';

export interface Skill extends Document {
  readonly Name: string;
  readonly Image: string;
}
