import { Module } from '@nestjs/common';
import { AppConfigModule } from '../../config/app/config.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
  imports: [AppConfigModule],
})
export class CatsModule {}
