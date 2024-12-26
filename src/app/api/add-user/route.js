import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
    const data = await request.json();
    const { username, password, companyName } = await data;

    const company = await prisma.company.findUnique({
        where: {
            name: companyName
        }
    })

    await prisma.user.create({
        data: {
            username: username,
            password: password,
            companyId: company.id
        }
    })
    console.log(data);
    return (
        new Response(JSON.stringify(data))
    )
}