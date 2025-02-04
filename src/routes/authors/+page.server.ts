// src/routes/+page.server.ts
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  const authors = await prisma.author.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  
  return {
    authors
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    
    // Procesar los campos básicos
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const pseudonym = formData.get('pseudonym') as string;
    const birthPlace = formData.get('birthPlace') as string;
    const nationality = formData.get('nationality') as string;
    const biography = formData.get('biography') as string;
    
    // Procesar fechas
    const birthDate = formData.get('birthDate') as string;
    const deathDate = formData.get('deathDate') as string;
    const isAlive = formData.get('isAlive') === 'on';

    // Procesar arrays
    // const literaryGenres = (formData.get('literaryGenres') as string)
    //   .split(',')
    //   .map(genre => genre.trim())
    //   .filter(genre => genre.length > 0);

    try {
      await prisma.author.create({
        data: {
          firstName,
          lastName,
          pseudonym: pseudonym || null,
          birthDate: birthDate ? new Date(birthDate) : null,
          deathDate: deathDate ? new Date(deathDate) : null,
          isAlive,
          birthPlace: birthPlace || null,
          nationality: nationality || null,
          biography: biography || null,          
        }
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error creating author:', error);
      return fail(500, {
        error: 'Error al crear el autor'
      });
    }
  }
};