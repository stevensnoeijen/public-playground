import {
    pgTable,
    serial,
    text,
    timestamp,
} from 'drizzle-orm/pg-core';

export const BoardTable = pgTable(
    'board',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        createdAt: timestamp('createdAt').defaultNow().notNull(),
    },
);