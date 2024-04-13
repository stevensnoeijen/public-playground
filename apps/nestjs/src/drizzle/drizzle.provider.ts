import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';

export const drizzleProvider = {
  provide: 'DRIZZLE_SOURCE',
  useFactory: async () => {
    const pgClient = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await pgClient.connect();
    const db = drizzle(pgClient, { schema, logger: true });
    return db;
  },
};
