import { Module } from '@nestjs/common';
import { AvailableDateService } from './available-date.service';
import { AvailableDateController } from './available-date.controller';

@Module({
  controllers: [AvailableDateController],
  providers: [AvailableDateService],
})
export class AvailableDateModule {}
