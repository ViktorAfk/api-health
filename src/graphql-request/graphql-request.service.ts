import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class GraphQLRequestService {
  constructor(private readonly httpService: HttpService) {}

  async fetchQuery(query: string) {
    const body = { query };

    try {
      const response = await firstValueFrom(
        this.httpService.post(
          'http://localhost:5001/api/getting-started',
          body,
        ),
      );

      return response.data.data;
    } catch (error) {
      console.error('Error fetching api health:', error);
      throw new Error('Failed to fetch api health data from GraphQL API');
    }
  }
}
