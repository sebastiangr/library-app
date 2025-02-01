<script lang="ts">
  import { enhance } from '$app/forms';
  import { formatDate } from '$lib/utils';
  import type { PageData } from './$types';
  
  export let data: PageData;

  // Variable para mostrar el estado de guardado
  let isSaving = false;
  
  // Variables para mostrar el modal de confirmación de eliminación
  let isModalOpen = false;
  let authorToDelete: any = null;
  
  // Variable para mostrar el estado de eliminación
  let isDeleting = false;
  
  /**
   * Función para eliminar un autor
   */
  async function deleteAuthor() {
    // Si no hay un autor seleccionado, no hace nada
    if (!authorToDelete) return;
    
    // Muestra el estado de eliminación
    isDeleting = true;
    try {
      // Realiza la petición para eliminar el autor
      // Realiza una petición DELETE a la ruta /api/authors/{id} para eliminar el autor
      // con el id de authorToDelete. La petición es asincrónica y se espera a que se resuelva
      // con el resultado de la petición. Si la petición es exitosa, se devuelve el resultado
      // en formato JSON. Si la petición falla, se devuelve un mensaje de error.
      const response = await fetch(`/api/authors/${authorToDelete.id}`, {
        method: 'DELETE'
      });
      
      // Obtiene el resultado de la petición
      const result = await response.json();
      
      // Si el resultado es exitoso, recarga la página
      if (result.success) {
        window.location.reload();
      } else {
        // De lo contrario, muestra un mensaje de error
        alert(result.message);
      }
    } catch (error) {
      // Muestra un mensaje de error en caso de error
      alert('Error al eliminar el autor');
    } finally {
      // Oculta el estado de eliminación y el modal
      isDeleting = false;
      isModalOpen = false;
    }
  }
  
  /**
   * Función para manejar el clic en un autor
   * 
   * Si el clic es en el botón eliminar, previene la navegación
   */
  function handleAuthorClick(event: MouseEvent, authorId: number) {
    if ((event.target as HTMLElement).closest('button')) {
      event.preventDefault();
    }
  }
</script>





<div class="mx-auto max-w-6xl grid grid-cols-2 gap-4 items-center">
  <!-- Formulario para ingresar un nuevo autor -->
  <div>
    <form 
      method="POST"
      use:enhance={() => {
        isSaving = true;
        return async ({ update }) => {
          await update();
          isSaving = false;
        };
      }}
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <!-- Indicador de estado de guardado -->
      {#if isSaving}
        <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong class="font-bold">Guardando autor...</strong>
        </div>
      {/if}

      <!-- Título del formulario -->
      <div class="mb-4">
        <h2 class="text-2xl font-bold mb-4 w-full text-center">Ingresar autor:</h2>
      </div>

      <!-- Datos básicos del autor -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">Nombre</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            name="firstName"
            type="text"
            required
            disabled={isSaving}
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">Apellido</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
            type="text"
            required
            disabled={isSaving}
          />
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="pseudonym">Seudónimo</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="pseudonym"
          name="pseudonym"
          type="text"
          disabled={isSaving}
        />
      </div>

      <!-- Información de fechas y estado vital -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="birthDate">Fecha de Nacimiento</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="birthDate"
            name="birthDate"
            type="date"
            disabled={isSaving}
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="deathDate">Fecha de Fallecimiento</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="deathDate"
            name="deathDate"
            type="date"
            disabled={isSaving}
          />
        </div>
      </div>

      <div class="mb-4">
        <label class="flex items-center">
          <input
            type="checkbox"
            name="isAlive"
            class="mr-2"
            checked
            disabled={isSaving}
          />
          <span class="text-gray-700 text-sm font-bold">Autor con vida</span>
        </label>
      </div>

      <!-- Información adicional del autor -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="birthPlace">Lugar de Nacimiento</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="birthPlace"
          name="birthPlace"
          type="text"
          disabled={isSaving}
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="nationality">Nacionalidad</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nationality"
          name="nationality"
          type="text"
          disabled={isSaving}
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="biography">Biografía</label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="biography"
          name="biography"
          rows="4"
          disabled={isSaving}
        ></textarea>
      </div>

      <!-- Géneros literarios del autor -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="literaryGenres">Géneros Literarios (separados por coma)</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="literaryGenres"
          name="literaryGenres"
          type="text"
          placeholder="Novela, Poesía, Teatro"
          disabled={isSaving}
        />
      </div>

      <!-- Botón para guardar el autor -->
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSaving}
      >
        {isSaving ? 'Guardando...' : 'Guardar Autor'}
      </button>
    </form>
  </div>

  <!-- Sección de autores registrados -->
  <div>
    <!-- TODO pendiente: Implementar funcionalidades -->
    <!-- TODO: Implementar paginación -->
    <!-- TODO: Implementar búsqueda -->
    <!-- TODO: Implementar ordenamiento -->
    <!-- TODO: Implementar edición y eliminación de autores -->

    <!-- Lista de autores -->
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <h2 class="text-2xl font-bold mb-4">Autores Registrados</h2>
      <div class="divide-y divide-gray-200">
        {#each data.authors as author}
          <a 
            href="/authors/{author.id}"
            class="block hover:bg-gray-50 py-4"
            on:click={(e) => handleAuthorClick(e, author.id)}
          >
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-lg font-semibold">
                  {author.firstName} {author.lastName}
                  {#if author.pseudonym}
                    <span class="text-gray-500 text-sm">({author.pseudonym})</span>
                  {/if}
                </h3>
                <p class="text-gray-600">{author.nationality || 'Nacionalidad no especificada'}</p>
                <p class="text-sm text-gray-500">
                  {formatDate(author.birthDate)} - 
                  {author.isAlive ? 'Presente' : formatDate(author.deathDate)}
                </p>
              </div>
              <div class="flex items-center justify-end">
                <button 
                  class="text-red-500 hover:text-red-700 focus:outline-none px-4 py-2 rounded"
                  on:click={() => {
                    authorToDelete = author;
                    isModalOpen = true;
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>    
  </div>
</div>

<!-- Modal de confirmación de eliminación -->
{#if isModalOpen}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
      <h3 class="text-lg font-bold mb-4">Confirmar Eliminación</h3>
      <p class="text-gray-700 mb-6">
        ¿Está seguro que desea eliminar al autor {authorToDelete?.firstName} {authorToDelete?.lastName}?
      </p>
      <div class="flex justify-end space-x-4">
        <button 
          class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
          on:click={() => isModalOpen = false}
          disabled={isDeleting}
        >
          Cancelar
        </button>
        <button 
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          on:click={deleteAuthor}
          disabled={isDeleting}
        >
          {isDeleting ? 'Eliminando...' : 'Eliminar'}
        </button>
      </div>
    </div>
  </div>
{/if}

