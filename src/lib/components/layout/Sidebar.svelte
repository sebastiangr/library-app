<script lang="ts">
	import { darkMode } from '$lib/stores/darkMode';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
  import { ArrowLeft, Book, ChartColumnBig, LibraryBig, Menu, Moon, Signature, Sun } from 'lucide-svelte';
  import { fade } from 'svelte/transition';

  let sidebarOpen = $state(true);

  const menuItems = [
    { name: 'Biblioteca', icon: LibraryBig, path: '/' },
    { name: 'Añadir Libro', icon: Book, path: '/books' },
    { name: 'Añadir Autor', icon: Signature, path: '/authors' },
    { name: 'Estadísticas', icon: ChartColumnBig, path: '/stats' },
    // { name: 'Configuraciones', icon: Settings, path: '/settings' },
    // { name: 'Perfil', icon: User, path: '/profile' }
  ];
</script>

<aside class="bg-gray-900 text-white h-full p-4 transition-all duration-300" style="width: {sidebarOpen ? '250px' : '72px'};">
  <button class="p-2 bg-gray-800 rounded" onclick={() => sidebarOpen = !sidebarOpen}>
    {#if sidebarOpen}
      <ArrowLeft size={24} />            
    {:else}
      <Menu size={24} />  
    {/if}
  </button>
  <div class="divider my-4 border-t-2 w-full border-gray-700"></div>
  <nav>
    {#each menuItems as item}
      <a href={item.path} class="flex items-center gap-2 p-2 rounded hover:bg-gray-700" style="width: {sidebarOpen ? 'auto' : '40px'};"> 
        <item.icon size={24} />
        {#if sidebarOpen}
          <span class="w-auto">{item.name}</span>
        {/if}
      </a>      
    {/each}
  </nav>

  <button class="p-2 rounded hover:bg-gray-600 transition-all duration-300" onclick={() => $darkMode = !$darkMode}>
    {#if $darkMode}
      <Sun size={24} />
    {:else}
      <Moon size={24} />
    {/if}
  </button>
</aside>
