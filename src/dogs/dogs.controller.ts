import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DogsService } from './dogs.service';

const dogsService = new DogsService();

@Controller('dogs')
export class DogsController {
  @Get()
  index() {
    return {
      dogs: dogsService.getAll(),
    };
  }

  @Get('/:id')
  show(@Param('id') id) {
    return dogsService.getById(id);
  }

  @Post()
  create(@Body() body) {
    return dogsService.createDog(body);
  }
}
