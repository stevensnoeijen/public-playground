import { Injectable } from '@nestjs/common';
import { client } from './db';

@Injectable()
export class AppService {
  async getHello() {
    const result = await client.query('SELECT NOW() as now');
    return 'Hello World! ' + result.rows[0].now;
  }
}
