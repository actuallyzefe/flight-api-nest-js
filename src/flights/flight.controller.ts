import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';

import { FlightsService } from './flight.service';

@Controller('flight')
export class FlightController {
  constructor(public flightService: FlightsService) {}

  @Get()
  listFlights() {
    return this.flightService.findAll();
  }

  // IMPORTANT BURASI TEST AMAÇLI
  @Post()
  createFlight(@Body() body) {
    return this.flightService.create(body.content);
  }
}
