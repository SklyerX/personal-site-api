import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
  Name: String,
  Image: String,
});
