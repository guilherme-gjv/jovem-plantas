import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from './dto/update-plant.input';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant)
    private plantRepository: Repository<Plant>,
  ) {
    return;
  }
  async create(data: CreatePlantInput): Promise<Plant> {
    const plant = this.plantRepository.create(data);
    const saved = await this.plantRepository.save(plant);
    return saved;
  }

  async findAll(): Promise<Plant[]> {
    const plants = await this.plantRepository.find();
    return plants;
  }

  async findOne(id: string): Promise<Plant> {
    const plant = this.plantRepository.findOne(id);
    if (!plant) {
      throw new NotFoundException('plant not found');
    }
    return plant;
  }

  async update(id: string, data: UpdatePlantInput) {
    const plant = await this.findOne(id);
    const updatedPlant = await this.plantRepository.save(
      Object.assign(plant, data),
    );
    return updatedPlant;
  }

  async remove(id: string): Promise<void> {
    const plant = await this.findOne(id);
    const deleted = await this.plantRepository.delete(plant);
    if (!deleted) {
      throw new InternalServerErrorException(
        'cannot delete the plant: ' + plant.name,
      );
    }
  }
}
