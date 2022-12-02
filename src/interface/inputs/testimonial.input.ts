import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TestimonialInput {
  @Field()
  readonly Name: string;
  @Field()
  readonly Message: string;
  @Field()
  readonly Date: string;
}
