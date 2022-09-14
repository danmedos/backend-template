import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { CatsModule } from '../cats/cats.module';
import { DogsModule } from '../dogs/dogs.module';

@Module({
  imports: [CatsModule, DogsModule, UsersModule],
})
export class ApiModule {}
