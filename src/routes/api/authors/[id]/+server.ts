import { prisma } from '$lib/server/prisma';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async ({ params }) => {
    try {
        const authorId = parseInt(params.id);
        
        if (isNaN(authorId)) {
            return json({ success: false, message: 'ID de autor inválido' }, { status: 400 });
        }

        await prisma.author.delete({
            where: {
                id: authorId
            }
        });

        return json({ success: true });
    } catch (error) {
        console.error('Error al eliminar autor:', error);
        return json(
            { success: false, message: 'Error al eliminar el autor' },
            { status: 500 }
        );
    }
};
