import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { ApiModule } from './models/api/api.module';
import { RRCDBProviderModule } from './providers/database/rrc/provider.module';
@Module({
  imports: [ApiModule, AppConfigModule, RRCDBProviderModule],
})
export class AppModule {}
