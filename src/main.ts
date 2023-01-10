import { NestFactory } from '@nestjs/core';
import { FlightModule } from './flights/flight.module';

async function bootstrap() {
  const app = await NestFactory.create(FlightModule);
  await app.listen(8000);
}
bootstrap();
