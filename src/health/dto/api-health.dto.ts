import { ObjectType } from '@nestjs/graphql';
import { QueryHealth } from 'src/graphql-types/graphql.types';

@ObjectType('apiHealth')
export class ApiHealthDto {
  apiHealth: QueryHealth;
}
