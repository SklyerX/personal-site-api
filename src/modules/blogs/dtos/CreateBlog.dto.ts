import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BlogTagDto {
  @Field()
  Name: string;
}

@ObjectType()
export class CreateBlogDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly Title: string;
  @Field()
  readonly Description: string;
  @Field()
  readonly Unixtimestamp: string;
  @Field()
  readonly Markdown: string;
  @Field()
  readonly Code: string;
  @Field(() => [BlogTagDto])
  readonly Tags: BlogTagDto[];
}
