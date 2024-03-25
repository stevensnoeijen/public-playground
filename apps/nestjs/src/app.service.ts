import { Injectable } from '@nestjs/common';
import { client } from './db';
import * as AWS from '@aws-sdk/client-s3';

@Injectable()
export class AppService {
  readonly s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      endpoint: 'http://localhost:4566',
      region: 'us-east-1',
    });
  }

  async getHello() {
    const dbResult = await client.query('SELECT NOW() as now');
    const buckets = await this.s3.listBuckets();

    return (
      'Hello World! it is' +
      dbResult.rows[0].now +
      ' and there are ' +
      (buckets.Buckets?.length ?? 0) +
      ' buckets on localstack'
    );
  }
}
