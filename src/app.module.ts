import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';
import { ExamsModule } from './exams/exams.module';
import { PrismaModule } from './prisma/prisma.module';
import { AvailableDateModule } from './available-date/available-date.module';

@Module({
  imports: [AppointmentsModule, ExamsModule, PrismaModule, AvailableDateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
