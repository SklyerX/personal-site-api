import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestimonialsSchema } from 'src/schemas/testimonials.schema';
import { TestimonialsResolver } from './testimonials.resolver';
import { TestimonialService } from './testimonials.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'testimonials', schema: TestimonialsSchema },
    ]),
  ],
  providers: [TestimonialsResolver, TestimonialService],
})
export class TestimonialsModule {}
