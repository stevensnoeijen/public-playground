import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Client } from 'pg';

async function main() {
  const pgClient = new Client(process.env.DATABASE_URL);
  pgClient.connect();
  const drizzleClient = drizzle(pgClient);
  await migrate(drizzleClient, {
    migrationsFolder: './src/drizzle/migrations',
  });
  await pgClient.end();
}

main();
