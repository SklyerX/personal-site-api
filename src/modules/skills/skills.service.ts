import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SkillInput } from 'src/interface/inputs/skill.input';
import { Skill } from 'src/interface/skill.interface';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel('skills') private readonly skillsSchema: Model<Skill>,
  ) {}

  async findAll(): Promise<Skill[]> {
    return await this.skillsSchema.find().exec();
  }

  async create(createSkillDto: SkillInput): Promise<Skill> {
    const createdData = new this.skillsSchema(createSkillDto);

    const data = await this.skillsSchema.findOne({ Name: createSkillDto.Name });

    if (data) {
      throw new HttpException(
        'Skill has already been added to the database!',
        HttpStatus.CONFLICT,
      );
    }

    return await createdData.save();
  }
}
