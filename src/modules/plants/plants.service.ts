import { Injectable } from '@nestjs/common';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from './dto/update-plant.input';

@Injectable()
export class PlantsService {
  create(createPlantInput: CreatePlantInput) {
    return 'This action adds a new plant';
  }

  findAll() {
    return `This action returns all plants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plant`;
  }

  update(id: number, updatePlantInput: UpdatePlantInput) {
    return `This action updates a #${id} plant`;
  }

  remove(id: number) {
    return `This action removes a #${id} plant`;
  }
}
