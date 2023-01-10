import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightsRepo } from './flight.repository';
import { FlightsService } from './flight.service';

@Module({
  controllers: [FlightController],
  providers: [FlightsRepo, FlightsService],
})
export class FlightModule {}
