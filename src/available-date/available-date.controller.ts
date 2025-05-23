import { Controller, Get, Query } from '@nestjs/common';
import { AvailableDateService } from './available-date.service';

@Controller('available-date')
export class AvailableDateController {
  constructor(private readonly availableDateService: AvailableDateService) {}

  @Get()
  findAll(@Query('examId') examId?: string) {
    return this.availableDateService.findAll(examId);
  }
}
