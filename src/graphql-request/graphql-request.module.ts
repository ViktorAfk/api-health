import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GraphQLRequestService } from './graphql-request.service';

@Module({
  imports: [HttpModule],
  providers: [GraphQLRequestService],
  exports: [GraphQLRequestService],
})
export class GraphQLRequestModule {}
