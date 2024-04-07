import { Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from './schema';

@Injectable()
export class DrizzleService {
    public readonly db: NodePgDatabase<typeof schema>;

    constructor(
        @Inject('DRIZZLE_SOURCE')
        db: NodePgDatabase<typeof schema>,
      ) {
        this.db = db;
      }
}