import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateFlightDto } from './DTOs/create-flight.dto';
import { FlightsService } from './flight.service';

@Controller('flight')
export class FlightController {
  constructor(public flightService: FlightsService) {}

  @Get()
  listFlights() {
    return this.flightService.findAll();
  }

  @Get('/:id')
  async getFlight(@Param('id') id: string) {
    const flight = await this.flightService.findOne(id);

    if (!flight) {
      throw new NotFoundException('No flight with that ID');
    }

    return flight;
  }

  // IMPORTANT BURASI TEST AMAÇLI
  @Post()
  createFlight(@Body() body: CreateFlightDto) {
    return this.flightService.create(body.flight);
  }
}
