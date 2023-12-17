import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {status: 'ok', message: 'Service is healthy!'};
  }
}
