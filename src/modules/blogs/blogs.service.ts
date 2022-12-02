import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from 'src/interface/blog.interface';
import { BlogInput } from 'src/interface/inputs/blog.input';
import { generateCode } from 'src/utils/generators';

@Injectable()
export class BlogsService {
  constructor(@InjectModel('blogs') private readonly blogModel: Model<Blog>) {}

  async findAll() {
    return await this.blogModel.find().exec();
  }

  async findOne(code: string) {
    const data = await this.blogModel.findOne({ Code: code });

    if (!data)
      throw new HttpException(
        'A blog with this code was not found!',
        HttpStatus.CONFLICT,
      );

    return data;
  }

  async create(createBlogDto: BlogInput): Promise<Blog> {
    let generatedCode = generateCode(12);

    const data = await this.blogModel.findOne({
      Title: createBlogDto.Title,
    });

    const codeData = await this.blogModel.findOne({ Code: generateCode });

    if (codeData) generatedCode = generateCode(12);

    if (data)
      throw new HttpException(
        'A blog with this name already exists!',
        HttpStatus.CONFLICT,
      );

    const createdData = new this.blogModel({
      Title: createBlogDto.Title,
      Description: createBlogDto.Description,
      Unixtimestamp: Date.now(),
      Markdown: createBlogDto.Markdown,
      Tags: createBlogDto.Tags,
      Code: generatedCode,
    });

    return createdData.save();
  }
}
