import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = '서버 에러가 발생했습니다.';
    let errorStatus = 'INTERNAL_SERVER_ERROR';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse() as any;

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (exceptionResponse.message) {
        if (Array.isArray(exceptionResponse.message)) {
          const lastIndex = exceptionResponse.message.length - 1;
          message = exceptionResponse.message[lastIndex];
        } else {
          message = exceptionResponse.message;
        }
      }

      switch (status) {
        case HttpStatus.BAD_REQUEST:
          errorStatus = 'BAD_REQUEST';
          break;
        case HttpStatus.UNAUTHORIZED:
          errorStatus = 'UNAUTHORIZED';
          break;
        case HttpStatus.FORBIDDEN:
          errorStatus = 'FORBIDDEN';
          break;
        case HttpStatus.NOT_FOUND:
          errorStatus = 'NOT_FOUND';
          break;
        case HttpStatus.CONFLICT:
          errorStatus = 'CONFLICT';
          break;
        default:
          errorStatus = 'INTERNAL_SERVER_ERROR';
      }
    }

    response.status(status).json({
      data: {
        status: errorStatus,
        statusCode: status,
        message,
      },
    });
  }
}
