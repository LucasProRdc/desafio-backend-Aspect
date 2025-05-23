import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppoinmentAlreadyExistsError } from './error';

@Injectable()
export class AppointmentsService {
  constructor(private prismaService: PrismaService) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    const appointment = await this.prismaService.appointment.findFirst({
      where: { examId: createAppointmentDto.examId },
    });

    if (appointment) {
      throw new AppoinmentAlreadyExistsError(createAppointmentDto.examId);
    }

    return this.prismaService.appointment.create({
      data: createAppointmentDto,
    });
  }

  findAll() {
    return this.prismaService.appointment.findMany({
      include: {
        exam: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  remove(id: string) {
    return this.prismaService.appointment.delete({
      where: { id },
    });
  }
}
