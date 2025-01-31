<script lang="ts">
	import { formatDate } from '$lib/utils';
  import type { PageData } from './$types';
  
  export let data: PageData;

</script>

<div class="max-w-4xl mx-auto p-4">
  <a 
    href="/"
    class="inline-block mb-4 text-blue-500 hover:text-blue-700"
  >
    ← Volver
  </a>

  {#if data.error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Error:</strong>
      <span class="block sm:inline">{data.error}</span>
    </div>
  {:else}
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <h1 class="text-3xl font-bold mb-4">
        {data.author.firstName} {data.author.lastName}
      </h1>
      
      {#if data.author.pseudonym}
        <h2>
          ({data.author.pseudonym})
        </h2>
      {/if}
      
      <p class="text-gray-600">
        {data.author.birthPlace || 'Lugar de Nacimiento no especificado'}
      </p>
      
      <p class="text-gray-600">
        {data.author.nationality || 'Nacionalidad no especificada'}
      </p>

      <p class="text-sm text-gray-500">
        {data.author.birthDate ? formatDate(data.author.birthDate) : 'Fecha de Nacimiento no especificada'} - 
        {data.author.isAlive ? 'Presente' : data.author.deathDate ? formatDate(data.author.deathDate) : 'Fecha de Fallecimiento no especificada'}
      </p>
      
      {#if data.author.biography}
        <div class="mt-4">
          <h2 class="text-xl font-semibold mb-2">Biografía</h2>
          <p class="text-gray-700 whitespace-pre-wrap">
            {data.author.biography}
          </p>
        </div>
      {/if}
    </div>
  {/if}
</div>
