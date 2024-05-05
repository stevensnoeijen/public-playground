import * as AWS from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { sql } from 'drizzle-orm';
import { DrizzleService } from './drizzle/drizzle.service';

@Injectable()
export class AppService {
  readonly s3: AWS.S3;

  constructor(private readonly drizzleService: DrizzleService) {
    this.s3 = new AWS.S3({
      endpoint: 'http://localhost:4566',
      region: 'us-east-1',
    });
  }

  getHello() {
    return 'Hello World!';
  }

  async getDbTime() {
    const dbResult =
      await this.drizzleService.db.execute(sql`SELECT NOW() as now`);

    return dbResult.rows[0].now;
  }

  async getNumberOfBuckets() {
    const buckets = await this.s3.listBuckets();

    return buckets.Buckets?.length ?? 0;
  }
}
