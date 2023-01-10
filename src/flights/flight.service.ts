import { FlightsRepo } from './flight.repository';
import { Controller, Injectable } from '@nestjs/common';

@Injectable()
export class FlightsService {
  constructor(public flightsRepo: FlightsRepo) {}

  findOne(id: string) {
    return this.flightsRepo.findOne(id);
  }

  findAll() {
    return this.flightsRepo.findAll();
  }

  create(content: string) {
    return this.flightsRepo.create(content);
  }
}
