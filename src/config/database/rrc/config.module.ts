import { Module } from '@nestjs/common';
import configuration from './configuration';
import { RRCDBConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigService, RRCDBConfigService],
  exports: [ConfigService, RRCDBConfigService],
})
export class RRCDBConfigModule {}
