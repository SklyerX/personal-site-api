import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsSchema } from 'src/schemas/projects.schema';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'projects', schema: ProjectsSchema }]),
  ],
  providers: [ProjectsResolver, ProjectsService],
})
export class ProjectsModule {}
