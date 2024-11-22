import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ApolloModule } from './apollo/apollo.module';
import { AppConfigModule } from './app-config/app-config.module';
import { HttpExceptionFilter } from './filter/http-exception.filter';

import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule, ApolloModule, AppConfigModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
