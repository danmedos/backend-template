import { IsDefined, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsDefined()
  readonly email: string;

  @IsString()
  readonly name: string;

  @IsString()
  @IsDefined()
  readonly password: string;
}
