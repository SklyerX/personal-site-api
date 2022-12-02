import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateSkillDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly Name: string;
  @Field()
  readonly Image: string;
}
