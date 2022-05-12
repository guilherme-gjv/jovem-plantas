import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlantsService } from './plants.service';
import { Plant } from './entities/plant.entity';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from './dto/update-plant.input';

@Resolver(() => Plant)
export class PlantsResolver {
  constructor(private readonly plantsService: PlantsService) {}

  @Mutation(() => Plant)
  async createPlant(
    @Args('createPlantInput') createPlantInput: CreatePlantInput,
  ) {
    return this.plantsService.create(createPlantInput);
  }

  @Query(() => [Plant], { name: 'plants' })
  async findAll() {
    return this.plantsService.findAll();
  }

  @Query(() => Plant, { name: 'plant' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return this.plantsService.findOne(id);
  }

  @Mutation(() => Plant)
  async updatePlant(
    @Args('updatePlantInput') updatePlantInput: UpdatePlantInput,
    @Args('id') id: string,
  ) {
    const plant = await this.plantsService.update(id, updatePlantInput);
    return plant;
  }

  @Mutation(() => Plant)
  async removePlant(@Args('id', { type: () => Int }) id: string) {
    return this.plantsService.remove(id);
  }
}
