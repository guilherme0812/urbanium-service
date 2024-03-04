import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { ImmobiliesModule } from './immobilies/immobilies.module';

@Module({
  imports: [CompaniesModule, ImmobiliesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
