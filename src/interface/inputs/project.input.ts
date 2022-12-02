import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Link {
  @Field()
  Name: string;
  @Field()
  Url: string;
}

@InputType()
export class Tag {
  @Field()
  Name: string;
}

@InputType()
export class ProjectInput {
  @Field()
  readonly Title: string;
  @Field()
  readonly Description: string;
  @Field(() => [Link])
  readonly Links: Array<Link>;
  @Field(() => [Tag])
  readonly Tags: Array<Tag>;
  @Field()
  readonly Image: string;
}
