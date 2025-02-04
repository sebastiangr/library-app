<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { darkMode } from '../../stores/darkMode';
	import { Moon, Search, Settings2, Sun, UserRound } from "lucide-svelte";
</script>

<header class="bg-gray-800 text-white p-4 flex justify-between items-center" class:bg-gray-50={$darkMode}>
  <form class="w-full max-w-md" action="/search" method="GET">
    <div class="relative">
        <input type="search" name="q" class="bg-gray-700 border-0 rounded p-2 w-full pl-12" placeholder="Buscar" />
        <Search class="absolute left-3 right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  </form>
  <div class="flex gap-2">
    <a href="/settings" class="p-2 rounded hover:bg-gray-600 transition-all duration-300"><Settings2 size={24} /></a>
    <a href="/profile" class="p-2 rounded hover:bg-gray-600 transition-all duration-300"><UserRound size={24} /></a>
    <!-- TODO: Implementar estilos dark/light -->
    <button class="p-2 rounded hover:bg-gray-600 transition-all duration-300" on:click={() => $darkMode = !$darkMode}>
      {#if $darkMode}
        <Sun size={24} />
      {:else}
        <Moon size={24} />
      {/if}
    </button>
    <!-- <LightSwitch /> -->
  </div>
</header>