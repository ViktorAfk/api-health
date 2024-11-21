import {
  ApolloClient,
  DocumentNode,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client/core';
import { Injectable } from '@nestjs/common';
import fetch from 'cross-fetch';

@Injectable()
export class ApolloService {
  private apolloClient: ApolloClient<NormalizedCacheObject>;
  constructor() {
    this.apolloClient = new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        fetch,
        uri: 'http://localhost:5001/api/getting-started',
      }),
      cache: new InMemoryCache({ addTypename: false }),
    });
  }
  async getQuery<TQueryResult>(query: DocumentNode) {
    const response = await this.apolloClient.query<TQueryResult>({ query });
    return response.data;
  }
}
