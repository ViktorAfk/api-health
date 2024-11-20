import { Module } from '@nestjs/common';
import { ApolloGraphQlService } from './apollo-graph-ql.service';

@Module({
  providers: [ApolloGraphQlService],
})
export class ApolloGraphQlModule {}
