import { Document } from 'mongoose';
import { Link, Tag } from './inputs/project.input';

export interface Project extends Document {
  readonly Title: string;
  readonly Description: string;
  readonly Links: Link[];
  readonly Tags: Tag[];
  readonly Image: string;
}
