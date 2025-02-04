<script lang="ts">
  import { InputChip } from '@skeletonlabs/skeleton';
	import { Plus, Trash } from 'lucide-svelte';
  let list: string[] = ['foo', 'bar', 'fizz', 'buzz'];
</script>

<main class="bg-white p-4 rounded-lg shadow-lg">
  <h1 class="text-3xl font-bold mb-4">Books</h1>

  <InputChip bind:value={list} name="chips" placeholder="Enter any value..." />

  <form class="mt-4">
    <div class="mb-4">
      <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
      <input type="text" id="title" name="title" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Book Title" />
    </div>
    <div class="mb-4">
      <label for="author" class="block text-sm font-medium text-gray-700">Author</label>
      <input type="text" id="author" name="author" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Author Name" />
    </div>
    <div class="mb-4">
      <label for="genre" class="block text-sm font-medium text-gray-700">Genre</label>
      <input type="text" id="genre" name="genre" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Genre" />
    </div>
    <div class="mb-4">
      <label for="year" class="block text-sm font-medium text-gray-700">Year</label>
      <input type="number" id="year" name="year" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Publication Year" />
    </div>
    
    <button type="button" class="btn variant-filled-primary">
      <Plus size={24} />
      <span>Guardar</span>
    </button>
    <button type="button" class="btn variant-filled-secondary">
      <Trash size={24} />
      <span>Limpiar</span>
    </button>    
  </form>
</main>