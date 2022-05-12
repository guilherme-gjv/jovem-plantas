import { Module } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { PlantsResolver } from './plants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './entities/plant.entity';
import { PlantController } from './plants.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Plant])],
  controllers: [PlantController],
  providers: [PlantsResolver, PlantsService],
})
export class PlantsModule {
  constructor() {
    return;
  }
}
