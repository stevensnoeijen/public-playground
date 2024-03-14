import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { DumbGuard, DumbValue } from './nest-decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(DumbGuard)
  @Get()
  getHello(@DumbValue() dumb: string): string {
    console.log('dumb:' + dumb);
    return this.appService.getHello();
  }
}
