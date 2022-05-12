/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { Plant } from './entities/plant.entity';
import { PlantsService } from './plants.service';

@Controller('plantas')
export class PlantController {
  constructor(private readonly plantService: PlantsService) {}

  @Get(':id')
  getHello(@Param('id') id: string): Promise<Plant> {
    return this.plantService.findOne(id);
  }

  @Get()
  getPlants(): Promise<Plant[]> {
    return this.plantService.findAll();
  }
}
