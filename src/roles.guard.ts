import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log(context.getHandler());
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    // const request = context.switchToHttp().getRequest();
    // request
    // const user = request.user;

    // 從 request 裏面取的 user info 取得 role

    const role = 'admin';

    return roles.includes(role);
  }
}
