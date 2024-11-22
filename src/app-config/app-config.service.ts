import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { z } from 'zod';

const validationObject = z.object({
  MOCK_API_URI: z.string().url(),
  API_KEY: z.string(),
  API_PORT: z.string().min(0).max(65535),
  WEB_URL: z.string().url(),
});

@Injectable()
export class AppConfigService {
  static validate = (
    config: Record<string, unknown>,
  ): z.infer<typeof validationObject> => validationObject.parse(config);
  constructor(
    private readonly configService: ConfigService<
      z.infer<typeof validationObject>,
      true
    >,
  ) {}

  get port(): number {
    return Number(this.configService.get('API_PORT'));
  }

  get ApiKey(): string {
    return this.configService.get('API_KEY');
  }

  get MockApiUri(): string {
    return this.configService.get('MOCK_API_URI');
  }

  get webUrl(): string {
    return this.configService.get('MOCK_API_URI');
  }
}
