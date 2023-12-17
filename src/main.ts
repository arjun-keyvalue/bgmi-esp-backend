import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 4000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log("Server listening on port " + port);
  });
}
bootstrap();
