import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';

/* ---------------------------------------------- */

async function bootstrap() {
  const app = await NestFactory.create(AppModule,);

  app.useLogger(app.get(Logger));  //  use the pine logger
   
  app.useGlobalPipes( // it is applied to every route handler across the entire application
    new ValidationPipe({   // Cast automaticaly class-transform
      transform: true, // If true, it allows to transform the flat JSON objects to objects of the DTO class.
      forbidUnknownValues: true, // Setting true will cause fail validation of unknown objects.
      forbidNonWhitelisted: true,  // If set to true, instead of stripping non-whitelisted properties validator will throw an error
    }),
  );

  const config = new DocumentBuilder()   // RESTful web services documentation
    .setTitle('Logistic')
    .setDescription('Demo')
    .setVersion('1.0')
    .addTag('logistic')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(AppModule.port);
}

/* ---------------------------------------------- */

bootstrap();

