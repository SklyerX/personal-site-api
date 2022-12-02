import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SkillInput {
  @Field()
  readonly Name: string;
  @Field()
  readonly Image: string;
}
