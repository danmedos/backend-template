import { Module } from '@nestjs/common';
import { CatsModule } from '../cats/cats.module';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Module({
  controllers: [DogsController],
  imports: [CatsModule],
  providers: [DogsService],
})
export class DogsModule {}
