import { Container } from "@mantine/core";
import { db } from "../../../drizzle/db";
import { eq } from "drizzle-orm";
import { BoardTable } from "../../../drizzle/schema";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
      id: string
    }
};

export default async function BoardPage({ params }: PageProps) {
    const board = await db.query.BoardTable.findFirst({
      where: eq(BoardTable.id, parseInt(params.id)),
    });

    if (board == null) {
        notFound();
    }

    return <Container>
        one result {board.name}
    </Container>
}