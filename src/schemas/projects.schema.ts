import * as mongoose from 'mongoose';

export const ProjectsSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Links: Array,
  Tags: Array,
  Image: String,
});
