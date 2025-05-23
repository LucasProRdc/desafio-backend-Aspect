import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExamsService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.exam.findMany();
  }
}
