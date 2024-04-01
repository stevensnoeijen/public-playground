import { Client } from 'pg';

export const client = new Client({
  connectionString: 'postgres://test:test@localhost:5432/test',
});
client.connect();
