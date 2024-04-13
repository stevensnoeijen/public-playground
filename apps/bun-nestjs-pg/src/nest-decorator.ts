import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  createParamDecorator,
} from '@nestjs/common';
import type { Observable } from 'rxjs';

@Injectable()
export class DumbGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    request.dumb = 'something';

    return true;
  }
}

export const DumbValue = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.dumb ?? 'nothing';
  },
);
