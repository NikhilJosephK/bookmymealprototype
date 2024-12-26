import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function POST(request) {
    try {
        const data = await request.json();
        const { company, admin, password } = await data;

        // This will create an admin user inside admin table and a company inside company table
        await prisma.admin.create({
            data: {
                username: admin,
                password: password,
                company: {
                    create: {
                        // Fields for the Company model
                        name: company,
                    },
                },
            },
        });

        return (
            new Response(JSON.stringify({ companyField: company, adminField: admin, passwordField: password }))
        )
    } catch (err) {
        return (
            new Response(JSON.stringify({ error: err }))
        )
    }

}

