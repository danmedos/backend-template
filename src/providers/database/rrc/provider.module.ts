import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { RRCDBConfigModule } from '../../../config/database/rrc/config.module';
import { RRCDBConfigService } from '../../../config/database/rrc/config.service';
import { User } from '../../../models/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [RRCDBConfigModule],
      inject: [RRCDBConfigService],
      useFactory: async (rrcDBConfigService: RRCDBConfigService) => ({
        type: 'mysql' as DatabaseType,
        host: rrcDBConfigService.host,
        port: rrcDBConfigService.port,
        username: rrcDBConfigService.username,
        password: rrcDBConfigService.password,
        database: rrcDBConfigService.database,
        entities: [User],
        migrations: ['dist/migration/**/*{.js,.ts}'],
        subscribers: ['dist/subscriber/**/*{.js,.ts}'],
        migrationsTableName: 'migrations_rrc',
      }),
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class RRCDBProviderModule {}
