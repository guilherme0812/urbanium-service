import { Module } from '@nestjs/common';
import { ImmobiliesService } from './immobilies.service';
import { ImmobiliesController } from './immobilies.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ImmobiliesController],
  providers: [ImmobiliesService],
})
export class ImmobiliesModule {}
