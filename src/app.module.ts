import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BgmiController } from './bgmi/bgmi.controller';
import { LoggingMiddleware } from './middleware/logging.middleware';

@Module({
  imports: [],
  controllers: [AppController, BgmiController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
