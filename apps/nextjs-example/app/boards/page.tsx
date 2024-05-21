import { Button, TextInput } from "@mantine/core";
import Link from "next/link";
import { db } from "../../drizzle/db";
import { BoardTable } from "../../drizzle/schema";

export default async function BoardsPage() {
    const boards = await db.query.BoardTable.findMany();

    const createBoard = async (formData: FormData) => {
        'use server';

        await db.insert(BoardTable).values({
            name: formData.get('name') as string,
        }).returning();
    }

    return (
    <div>
        <ul>
            {boards?.map((board) => {
                return <li key={board.id}>
                    <Link href={'boards/' + board.id}>{board.id}: {board.name}</Link>
                </li>
            })}
        </ul>
        <form action={createBoard}>
            <TextInput name="name"/>
            <Button type="submit">Send</Button>
        </form>
    </div>);
}