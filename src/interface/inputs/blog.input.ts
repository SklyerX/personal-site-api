import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BlogTag {
  @Field()
  Name: string;
}

@InputType()
export class BlogInput {
  @Field()
  readonly Title: string;
  @Field()
  readonly Description: string;
  // @Field()
  // readonly Unixtimestamp: string;
  @Field()
  readonly Markdown: string;
  // @Field()
  // readonly Code: string;
  @Field(() => [BlogTag])
  readonly Tags: Array<BlogTag>;
}

@InputType()
export class FindBlogInput {
  @Field()
  readonly Code: string;
}
