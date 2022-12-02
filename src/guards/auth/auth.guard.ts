import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req: Request = ctx.getContext().req;
    const { authorization: Authorization } = req.headers;

    if (!Authorization)
      throw new HttpException(
        'Provide an authorization in the headers!',
        HttpStatus.BAD_REQUEST,
      );

    if (Authorization != process.env.TOKEN)
      throw new HttpException(
        'Invalid Token Provided!',
        HttpStatus.UNAUTHORIZED,
      );

    return true;
  }
}
