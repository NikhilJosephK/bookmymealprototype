import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {

    const data = await request.json();
    const { username, password } = data;

    const user = await prisma.user.findUnique({
        where: {
            username: username,
            password: password
        }
    })

    return (
        new Response(JSON.stringify(user))
    )
}