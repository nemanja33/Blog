import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import { createClient } from '@libsql/client';

config({ path: '.env' });

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

export const db = drizzle(client, { schema });