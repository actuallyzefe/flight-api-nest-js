import { IsString, isString } from 'class-validator';

export class CreateFlightDto {
  @IsString()
  content: string;
}
