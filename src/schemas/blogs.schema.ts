import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Unixtimestamp: String,
  Markdown: String,
  Code: String,
  Tags: Array,
});
