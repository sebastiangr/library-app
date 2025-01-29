// Singleton pattern para el cliente de Prisma
// Esto evita múltiples conexiones a la base de datos
import { PrismaClient } from '@prisma/client'

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma
}

export { prisma }
