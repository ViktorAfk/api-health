import { gql } from '@apollo/client/core';
import { Injectable } from '@nestjs/common';
import { ApolloService } from 'src/apollo/apollo.service';

@Injectable()
export class HealthService {
  constructor(private readonly apolloService: ApolloService) {}
  getApiHeath() {
    const query = gql`
    query {
    apiHealth {
    status
    services {
      name
      category
      status
        }
      }
    }
  `;

    return this.apolloService.getQuery(query);
  }
}
