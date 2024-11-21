import { Module } from '@nestjs/common';
import { GraphQLRequestModule } from './graphql-request/graphql-request.module';
import { HealthModule } from './health/health.module';
import { ApolloModule } from './apollo/apollo.module';
import { AppConfigModule } from './app-config/app-config.module';

@Module({
  imports: [HealthModule, GraphQLRequestModule, ApolloModule, AppConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
