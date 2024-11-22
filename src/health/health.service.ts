import { gql } from '@apollo/client/core';
import { Injectable } from '@nestjs/common';
import { ApolloService } from 'src/apollo/apollo.service';
import { ApiHealthDto } from './dto/api-health.dto';

@Injectable()
export class HealthService {
  constructor(private readonly apolloService: ApolloService) {}
  async getApiHeath(): Promise<ApiHealthDto> {
    try {
      const query = gql`
      query {
        apiHealth {
          status
          version
          memory
          connections
          uptime
          serviceId
          releaseId
          description
          services {
            name
            category
            status
            metrics {
              request
              latency
            }
            historical {
              dataPoints {
                time
                value
              }
            }
          }
        }
      }
    `;

      const response = await this.apolloService.getQuery<ApiHealthDto>(query);

      return response;
    } catch (error) {
      console.error('Error fetching api health:', error);
      throw new Error('Failed to fetch api health data from GraphQL API');
    }
  }
}
