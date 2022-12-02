import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LinkDto {
  @Field()
  Name: string;
  @Field()
  Url: string;
}

@ObjectType()
export class TagDto {
  @Field()
  Name: string;
}

@ObjectType()
export class CreateProjectDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly Title: string;
  @Field()
  readonly Description: string;
  @Field(() => [LinkDto])
  readonly Links: Array<LinkDto>;
  @Field(() => [TagDto])
  readonly Tags: Array<TagDto>;
  @Field()
  readonly Image: string;
}
