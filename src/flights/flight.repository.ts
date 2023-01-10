import { Injectable } from '@nestjs/common';

import { readFile, writeFile } from 'fs/promises';
import { json } from 'stream/consumers';

@Injectable()
export class FlightsRepo {
  async findOne(id: string) {
    const content = await readFile('data.json', 'utf-8');
    const flight = JSON.parse(content);

    return flight[id];
  }

  async findAll() {
    const contents = await readFile('data.json', 'utf-8');
    const flights = JSON.parse(contents);

    return flights;
  }

  // IMPORTANT BU TEST AMAÇLIDIR
  async create(content: string) {
    const contents = await readFile('data.json', 'utf-8');
    const flight = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    flight[id] = { id, content };

    await writeFile('data.json', JSON.stringify(flight));
  }
}
