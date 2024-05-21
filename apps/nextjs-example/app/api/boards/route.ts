import { NextResponse } from 'next/server';
import { db } from '../../../drizzle/db';

export async function GET(request: Request) {
    try {
        const boards = await db.query.BoardTable.findMany();
        return NextResponse.json({ result: boards }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
