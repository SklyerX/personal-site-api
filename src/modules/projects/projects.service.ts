import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectInput } from 'src/interface/inputs/project.input';
import { Project } from 'src/interface/project.interface';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('projects') private readonly projectModel: Model<Project>,
  ) {}

  async findAll() {
    return await this.projectModel.find().exec();
  }

  async create(createProjectDto: ProjectInput): Promise<Project> {
    const createdData = new this.projectModel({});

    const data = await this.projectModel.findOne({
      Title: createProjectDto.Title,
    });

    if (data)
      throw new HttpException(
        'A project with this name already exists!',
        HttpStatus.CONFLICT,
      );

    return createdData.save();
  }
}
