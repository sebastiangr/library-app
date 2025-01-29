<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData } from './$types';
  
  export let data: PageData;

  // Función para formatear fechas
  function formatDate(date: string | null) {
    if (!date) return 'No disponible';
    return new Date(date).toLocaleDateString();
  }
</script>

<!-- <div class="max-w-4xl mx-auto p-4">
  <h1 class="text-3xl font-bold mb-8">Gestión de Autores</h1>

  <!-- Formulario mejorado de creación de autor -->


  <!-- Lista de autores mejorada -->

<!-- </div>  -->

<div class="mx-auto max-w-6xl grid grid-cols-2 gap-4 items-center">
  <div>
    
    <form 
    method="POST"
    use:enhance
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div class="mb-4">
      <h2 class="text-2xl font-bold mb-4 w-full text-center">Ingresar autor:</h2>
    </div>

    <!-- Datos básicos -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
          Nombre
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          name="firstName"
          type="text"
          required
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
          Apellido
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          name="lastName"
          type="text"
          required
        />
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="pseudonym">
        Seudónimo
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="pseudonym"
        name="pseudonym"
        type="text"
      />
    </div>

    <!-- Fechas y estado vital -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="birthDate">
          Fecha de Nacimiento
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="birthDate"
          name="birthDate"
          type="date"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="deathDate">
          Fecha de Fallecimiento
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="deathDate"
          name="deathDate"
          type="date"
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
        />
        <span class="text-gray-700 text-sm font-bold">Autor con vida</span>
      </label>
    </div>

    <!-- Información adicional -->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="birthPlace">
        Lugar de Nacimiento
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="birthPlace"
        name="birthPlace"
        type="text"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="nationality">
        Nacionalidad
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="nationality"
        name="nationality"
        type="text"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="biography">
        Biografía
      </label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="biography"
        name="biography"
        rows="4"
      ></textarea>
    </div>

    <!-- Campos de arrays -->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="literaryGenres">
        Géneros Literarios (separados por coma)
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="literaryGenres"
        name="literaryGenres"
        type="text"
        placeholder="Novela, Poesía, Teatro"
      />
    </div>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Guardar Autor
    </button>
    </form>
  </div>

  <div>
    
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <h2 class="text-2xl font-bold mb-4">Autores Registrados</h2>
      <div class="divide-y divide-gray-200">
        {#each data.authors as author}
          <a 
            href="/authors/{author.id}"
            class="block hover:bg-gray-50 py-4"
          >
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-lg font-semibold">
                  {author.firstName} {author.lastName}
                  {#if author.pseudonym}
                    <span class="text-gray-500 text-sm">({author.pseudonym})</span>
                  {/if}
                </h3>
                <p class="text-gray-600">
                  {author.nationality || 'Nacionalidad no especificada'}
                </p>
                <p class="text-sm text-gray-500">
                  {formatDate(author.birthDate)} - 
                  {author.isAlive ? 'Presente' : formatDate(author.deathDate)}
                </p>
              </div>
              <div class="text-sm text-gray-500">
                {author.literaryGenres?.length ? author.literaryGenres.join(', ') : 'Sin géneros especificados'}
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>    
  </div>
</div>
