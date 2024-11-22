import {
  ApolloClient,
  DocumentNode,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client/core';
import { Injectable } from '@nestjs/common';
import fetch from 'cross-fetch';
import { AppConfigService } from 'src/app-config/app-config.service';

@Injectable()
export class ApolloService {
  private apolloClient: ApolloClient<NormalizedCacheObject>;
  constructor(private readonly appConfigService: AppConfigService) {
    this.apolloClient = new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        fetch,
        uri: this.appConfigService.MockApiUri,
        headers: {
          Authorization: `apikey ${this.appConfigService.ApiKey}`,
          'Content-type': 'application/json',
        },
      }),
      cache: new InMemoryCache({ addTypename: false }),
    });
  }

  async getQuery<TQueryResult>(query: DocumentNode) {
    const response = await this.apolloClient.query<TQueryResult>({ query });
    return response.data;
  }
}
