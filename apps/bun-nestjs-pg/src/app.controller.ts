import { Controller, Get, UseGuards } from '@nestjs/common';
import type { AppService } from './app.service';
import { client } from './db';
import { DumbGuard, DumbValue } from './nest-decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(DumbGuard)
  @Get()
  async getHello(@DumbValue() dumb: string) {
    try {
      const res = await client.query('SELECT NOW() as now');
      console.log(`time is ${res.rows[0].now}`);
    } catch (error) {
      console.error(error);
    }

    console.log(`dumb:${dumb}`);
    return this.appService.getHello();
  }
}
