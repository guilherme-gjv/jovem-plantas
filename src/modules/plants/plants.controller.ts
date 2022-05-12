import { Controller, Get, Param } from '@nestjs/common';

@Controller('plantas')
export class PlantController {
  constructor() {
    return;
  }

  @Get(':id')
  getHello(@Param('id') id: string): string {
    return 'oie' + id;
  }

  @Get()
  getPlants(): string {
    return 'Planta rock';
  }
}
