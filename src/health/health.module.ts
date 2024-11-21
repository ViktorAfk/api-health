import { Module } from '@nestjs/common';
import { ApolloModule } from 'src/apollo/apollo.module';
import { GraphQLRequestModule } from 'src/graphql-request/graphql-request.module';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
  imports: [GraphQLRequestModule, ApolloModule],
})
export class HealthModule {}
