<script lang="ts">
  import { InputChip } from '@skeletonlabs/skeleton';
  let list: string[] = ['foo', 'bar', 'fizz', 'buzz'];
</script>

<main class="bg-white p-4 rounded-lg shadow-lg">
  <h1 class="text-3xl font-bold mb-4">Books</h1>

  <InputChip bind:value={list} name="chips" placeholder="Enter any value..." />
</main>
