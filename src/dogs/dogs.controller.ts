import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../roles.guard';
import { CatsService } from '../cats/cats.service';

@Controller('dogs')
@UseGuards(RolesGuard)
export class DogsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @SetMetadata('roles', ['generate', 'admin'])
  findAll() {
    return this.catsService.findAll();
  }
}
