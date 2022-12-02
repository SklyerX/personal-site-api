import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { SkillInput } from 'src/interface/inputs/skill.input';
import { CreateSkillDto } from './dtos/CreateSkill.dto';
import { SkillsService } from './skills.service';

@Resolver()
export class SkillsResolver {
  constructor(private readonly skillsService: SkillsService) {}

  @Query(() => String)
  async hello() {
    return 'Hello';
  }

  @Query(() => [CreateSkillDto])
  async skills() {
    return this.skillsService.findAll();
  }

  @Mutation(() => CreateSkillDto)
  @UseGuards(AuthGuard)
  async createSkill(@Args('input') input: SkillInput) {
    return this.skillsService.create(input);
  }
}
