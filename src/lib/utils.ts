// Función para formatear fechas
function formatDate(date: string | null) {
    if (!date) return 'No disponible';
    return new Date(date).toLocaleDateString();
}
export { formatDate };
