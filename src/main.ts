import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig: AppConfigService = app.get(AppConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('apis');
  app.enableVersioning({ type: VersioningType.URI });
  await app.listen(appConfig.port);
}
bootstrap();
