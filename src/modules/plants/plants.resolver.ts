import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlantsService } from './plants.service';
import { Plant } from './entities/plant.entity';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from './dto/update-plant.input';

@Resolver(() => Plant)
export class PlantsResolver {
  constructor(private readonly plantsService: PlantsService) {}

  @Mutation(() => Plant)
  createPlant(@Args('createPlantInput') createPlantInput: CreatePlantInput) {
    return this.plantsService.create(createPlantInput);
  }

  @Query(() => [Plant], { name: 'plants' })
  findAll() {
    return this.plantsService.findAll();
  }

  @Query(() => Plant, { name: 'plant' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.plantsService.findOne(id);
  }

  @Mutation(() => Plant)
  updatePlant(@Args('updatePlantInput') updatePlantInput: UpdatePlantInput) {
    return this.plantsService.update(updatePlantInput.id, updatePlantInput);
  }

  @Mutation(() => Plant)
  removePlant(@Args('id', { type: () => Int }) id: number) {
    return this.plantsService.remove(id);
  }
}
