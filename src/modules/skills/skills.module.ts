import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsResolver } from './skills.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillSchema } from 'src/schemas/skills.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'skills', schema: SkillSchema }]),
  ],
  controllers: [],
  providers: [SkillsService, SkillsResolver],
})
export class SkillsModule {}
