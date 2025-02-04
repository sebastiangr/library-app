<script>
	import { Settings, User } from "lucide-svelte";
</script>

<header class="bg-gray-800 text-white p-4 flex justify-between items-center">
  <span>Library App</span>
  <div class="flex gap-2">
    <a href="/settings" class="p-2 bg-gray-700 rounded"><Settings size={24} /></a>
    <a href="/profile" class="p-2 bg-gray-700 rounded"><User size={24} /></a>
  </div>
</header>