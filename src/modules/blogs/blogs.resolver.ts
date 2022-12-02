import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { BlogInput } from 'src/interface/inputs/blog.input';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dtos/CreateBlog.dto';

@Resolver()
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}

  @Query(() => [CreateBlogDto])
  async blogs() {
    return this.blogsService.findAll();
  }

  @Query(() => CreateBlogDto)
  async blog(@Args('code') code: string) {
    return this.blogsService.findOne(code);
  }

  @Mutation(() => CreateBlogDto)
  @UseGuards(AuthGuard)
  async createBlog(@Args('input') input: BlogInput) {
    return this.blogsService.create(input);
  }
}
