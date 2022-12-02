import { Document } from 'mongoose';

export interface Testimonial extends Document {
  readonly Name: string;
  readonly Message: string;
  readonly Date: string;
}
