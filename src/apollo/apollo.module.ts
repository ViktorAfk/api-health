import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/app-config/app-config.module';
import { ApolloService } from './apollo.service';

@Module({
  providers: [ApolloService],
  exports: [ApolloService],
  imports: [AppConfigModule],
})
export class ApolloModule {}
