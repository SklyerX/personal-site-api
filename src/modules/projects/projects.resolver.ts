import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ProjectInput } from 'src/interface/inputs/project.input';
import { CreateProjectDto } from './dtos/CreateProject.dto';
import { ProjectsService } from './projects.service';

@Resolver()
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(() => [CreateProjectDto])
  async projects() {
    return this.projectsService.findAll();
  }

  @Mutation(() => CreateProjectDto)
  @UseGuards(AuthGuard)
  async createProject(@Args('input') input: ProjectInput) {
    return this.projectsService.create(input);
  }
}
