import { Module } from '@nestjs/common';
import { ApolloModule } from 'src/apollo/apollo.module';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
  imports: [ApolloModule],
})
export class HealthModule {}
