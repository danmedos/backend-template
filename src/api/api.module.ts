import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { CatsModule } from '../cats/cats.module';
import { DogsModule } from '../dogs/dogs.module';

@Module({
  controllers: [ApiController],
  imports: [CatsModule, DogsModule],
})
export class ApiModule {}
