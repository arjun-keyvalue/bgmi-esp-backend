import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BgmiController } from './bgmi/bgmi.controller';

@Module({
  imports: [],
  controllers: [AppController, BgmiController],
  providers: [AppService],
})
export class AppModule {}
