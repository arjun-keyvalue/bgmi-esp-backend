import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = new Date();
    const { method, originalUrl } = req;

    res.on('finish', () => {
      const endTime = new Date();
      const duration = endTime.getTime() - startTime.getTime();
      const logMessage = `${method} ${originalUrl} ${res.statusCode} ${duration}ms`;

      console.log(logMessage);
    });

    next();
  }
}