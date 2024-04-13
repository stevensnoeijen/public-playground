import { Inject, Injectable } from '@nestjs/common';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import type * as schema from './schema';

@Injectable()
export class DrizzleService {
  constructor(
    @Inject('DRIZZLE_SOURCE')
    public readonly db: NodePgDatabase<typeof schema>,
  ) {}
}
