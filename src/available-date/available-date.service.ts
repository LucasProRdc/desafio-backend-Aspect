import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AvailableDateService {
  constructor(private prismaService: PrismaService) {}
  findAll(examId?: string) {
    return this.prismaService.availableData.findMany({
      where: examId ? { examId } : undefined,
    });
  }
}
