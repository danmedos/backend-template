import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class RRCDBConfigService {
  constructor(private configService: ConfigService) {}

  get type(): string {
    return this.configService.get<string>('rrcDB.type');
  }
  get host(): string {
    return this.configService.get<string>('rrcDB.host');
  }
  get port(): string {
    return this.configService.get<string>('rrcDB.port');
  }
  get username(): string {
    return this.configService.get<string>('rrcDB.username');
  }
  get password(): string {
    return this.configService.get<string>('rrcDB.password');
  }
  get database(): string {
    return this.configService.get<string>('rrcDB.database');
  }
}
