import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function POST(request) {
    const data = await request.json();
    // console.log(data);
    const { days, breakfast, lunch, dinner, username } = data;

    const findUserId = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    const { id, companyId } = findUserId;
    const date = days.join(", ");

    await prisma.meals.create({
        data: {
            breakfast: String(breakfast),
            lunch: String(lunch),
            dinner: String(dinner),
            day: date,
            userId: id,
            companyId: companyId
        }
    })

    return (
        new Response(JSON.stringify(data))
    )
}