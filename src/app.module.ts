import { Module } from '@nestjs/common';
import { ApolloGraphQlModule } from './appolo-graph-ql/apollo-graph-ql.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule, ApolloGraphQlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
