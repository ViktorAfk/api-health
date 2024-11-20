import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHeathValue() {
    return 'I am healthy';
  }
}
