<script lang="ts">
  import { darkMode } from '../lib/stores/darkMode';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import '../app.css';
	let { children } = $props();


  // Efecto que se ejecuta cuando cambia el modo oscuro
  // Añade/elimina la clase 'dark' al elemento raíz del documento
  $effect(() => {
    if ($darkMode) {      
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
</script>

<div class="flex h-screen transition-all duration-300">

  <!-- Sidebar -->
  <Sidebar />

  <!-- Main Content -->
  <div class="flex-1 flex flex-col">
    <!-- Headbar -->
    <TopNav />
    <!-- Page Content -->
    <main class="flex-1 p-4 overflow-auto">
      {@render children()}
    </main>
  </div>

</div>