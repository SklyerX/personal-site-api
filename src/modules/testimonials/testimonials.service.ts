import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestimonialInput } from 'src/interface/inputs/testimonial.input';
import { Testimonial } from 'src/interface/testimonial.interface';

@Injectable()
export class TestimonialService {
  constructor(
    @InjectModel('testimonials')
    private readonly testimonialsSchema: Model<Testimonial>,
  ) {}

  async findAll(): Promise<Testimonial[]> {
    return await this.testimonialsSchema.find().exec();
  }

  async create(createTestimonialDto: TestimonialInput): Promise<Testimonial> {
    const createdData = new this.testimonialsSchema(createTestimonialDto);

    const data = await this.testimonialsSchema.findOne({
      Name: createTestimonialDto.Name,
    });

    if (data) {
      throw new HttpException(
        'Testimonal from that user has already been added to the database!',
        HttpStatus.CONFLICT,
      );
    }

    return await createdData.save();
  }
}
