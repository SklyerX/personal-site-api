import * as mongoose from 'mongoose';

export const TestimonialsSchema = new mongoose.Schema({
  Name: String,
  Message: String,
  Date: String,
});
