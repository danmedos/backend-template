import { IsDefined, IsInt } from 'class-validator';

export class CreateCatDto {
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsDefined()
  readonly breed: string;
}
