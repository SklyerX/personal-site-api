import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateTestimonialDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly Name: string;
  @Field()
  readonly Message: string;
  @Field()
  readonly Date: string;
}
