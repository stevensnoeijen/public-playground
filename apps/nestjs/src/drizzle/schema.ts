import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const UserTable = pgTable('user', {
  id: serial('id'),
  email: varchar('email').notNull().unique(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});
