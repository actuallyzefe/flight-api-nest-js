import { IsString, isString } from 'class-validator';

export class CreateFlightDto {
  @IsString()
  flight: string;
}
