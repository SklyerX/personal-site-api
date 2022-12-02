import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsResolver } from './blogs.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from 'src/schemas/blogs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'blogs', schema: BlogSchema }])],
  providers: [BlogsService, BlogsResolver],
})
export class BlogsModule {}
