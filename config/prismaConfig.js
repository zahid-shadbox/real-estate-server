import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
 try {
 await prisma.$connect();
 console.log('Connected to the database');
 } catch (err) {
 console.error('Failed to connect to the database: ', err);
 } finally {
 await prisma.$disconnect();
 }
}

main().catch(e => { throw e });

export { prisma };
