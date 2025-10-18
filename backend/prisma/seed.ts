
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main(){
  await prisma.user.upsert({ where: { email: 'admin@sistemiintegrati.it' }, update: {}, create: { email: 'admin@sistemiintegrati.it', name: 'Admin', role: 'admin', password: 'admin123' } });
  await prisma.user.upsert({ where: { email: 'agente@sistemiintegrati.it' }, update: {}, create: { email: 'agente@sistemiintegrati.it', name: 'Agente', role: 'agent', password: 'agente123' } });
  await prisma.user.upsert({ where: { email: 'cliente@sistemiintegrati.it' }, update: {}, create: { email: 'cliente@sistemiintegrati.it', name: 'Cliente', role: 'client', password: 'cliente123' } });
  console.log('Seed finished');
}
main().catch(e => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
