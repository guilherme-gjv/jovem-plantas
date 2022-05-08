import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Plant {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
