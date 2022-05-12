import { CreatePlantInput } from './create-plant.input';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdatePlantInput extends PartialType(CreatePlantInput) {
  @Field(() => ID)
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  flowerColor: string;
}
