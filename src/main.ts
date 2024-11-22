import { NestFactory } from '@nestjs/core';
import { AppConfigService } from './app-config/app-config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<AppConfigService>(AppConfigService);
  const allowedOrigins = [appConfig.webUrl];

  app.enableCors({
    credentials: true,
    origin: allowedOrigins,
  });
  await app.listen(appConfig.port || 3000);
}
bootstrap();
