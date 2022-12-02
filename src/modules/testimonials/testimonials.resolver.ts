import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { TestimonialInput } from 'src/interface/inputs/testimonial.input';
import { CreateTestimonialDto } from './dtos/CreateTestimonial.dto';
import { TestimonialService } from './testimonials.service';

@Resolver()
export class TestimonialsResolver {
  constructor(private readonly skillsService: TestimonialService) {}

  @Query(() => [CreateTestimonialDto])
  async testimonials() {
    return this.skillsService.findAll();
  }

  @Mutation(() => CreateTestimonialDto)
  @UseGuards(AuthGuard)
  async createTestimonial(@Args('input') input: TestimonialInput) {
    return this.skillsService.create(input);
  }
}
