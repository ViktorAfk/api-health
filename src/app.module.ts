import { Module } from '@nestjs/common';
import { GraphQLRequestModule } from './graphql-request/graphql-request.module';
import { HealthModule } from './health/health.module';
import { ApolloModule } from './apollo/apollo.module';

@Module({
  imports: [HealthModule, GraphQLRequestModule, ApolloModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
