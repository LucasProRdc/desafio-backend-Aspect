import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppoinmentAlreadyExistsErrorFilter } from './appointments/filters/product-slug-already-exists';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
    }),
  );

  app.useGlobalFilters(new AppoinmentAlreadyExistsErrorFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
