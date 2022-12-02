import { Document } from 'mongoose';
import { Tag } from './inputs/project.input';

export interface Blog extends Document {
  readonly Title: string;
  readonly Unixtimestamp: string;
  readonly Markdown: string;
  readonly Code: string;
  readonly Tags: Tag[];
}
