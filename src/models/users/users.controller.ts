import {
  Get,
  Post,
  Body,
  Controller,
  SerializeOptions,
  Delete,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {
  UserEntity,
  extendedUserGroupsForSerializing,
} from './serializers/user.serializer';
import { UsersService } from './users.service';

@Controller('users')
@SerializeOptions({
  groups: extendedUserGroupsForSerializing,
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:id')
  async get(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.findOne(id);
  }
  @Post('/')
  async create(@Body() inputs: CreateUserDto): Promise<UserEntity> {
    return await this.usersService.create(inputs);
  }
  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.usersService.remove(id);
  }
}
