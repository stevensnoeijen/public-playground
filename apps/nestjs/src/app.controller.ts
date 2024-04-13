import { Controller, Get, Redirect } from '@nestjs/common';
import type { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/swagger')
  getIndex() {}

  @Get('/hello-world')
  getHello() {
    return this.appService.getHello();
  }

  @Get('/db-time')
  getDbTime() {
    return this.appService.getDbTime();
  }

  @Get('/number-of-buckets')
  async getBuckets() {
    const numberOfBuckets = await this.appService.getNumberOfBuckets();
    return `There are ${numberOfBuckets} buckets on localstack`;
  }
}
