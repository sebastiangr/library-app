<script lang="ts">
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import '../app.css';
	let { children } = $props();


  // import { $state } from 'svelte';
  import { Settings, User } from 'lucide-svelte';

  // let sidebarOpen = $state(true);

  // const menuItems = [
  //   { name: 'Inicio', icon: Home, path: '/' },
  //   { name: 'Configuraciones', icon: Settings, path: '/settings' },
  //   { name: 'Perfil', icon: User, path: '/profile' }
  // ];
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

