import { 
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  HttpException,
  HttpStatus 
} from '@nestjs/common';
import { AppService } from './app.service';
import { Works } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getWorks(): Works[] {
    try {
      return this.appService.getWorks();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  getWorkById(@Param('id') id: number): Works {
    try {
      return this.appService.getWorkById(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  createWork(@Body() { title, fileName, linkProject, details, displayed }: Works): Works[] {
    try {
      return this.appService.createWork(title, fileName, linkProject, details, displayed);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post(':id')
  editWork(@Param('id') id: number, @Body() { title, fileName, linkProject, details, displayed }: Works): Works[] {
    try {
      return this.appService.editWork(id, title, fileName, linkProject, details, displayed);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  deleteWork(@Param('id') id: number): Works[] {
    try {
      return this.appService.deleteWork(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
