import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  console.log('Rodando na porta ' + PORT);

  await app.listen(PORT);
}
bootstrap();
