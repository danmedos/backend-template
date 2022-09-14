import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Header,
  ParseIntPipe,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { RolesGuard } from '../../roles.guard';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto } from './dto';
import { AppConfigService } from '../../config/app/config.service';

@Controller({ path: 'cats', version: '1' })
@UseGuards(RolesGuard)
export class CatsController {
  constructor(
    private catsService: CatsService,
    private configService: AppConfigService,
  ) {
    console.log(this.configService.name);
  }

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto.name);
  }

  @Get()
  @SetMetadata('roles', ['admin'])
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${updateCatDto.name} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
