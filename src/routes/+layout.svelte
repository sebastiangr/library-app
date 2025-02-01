<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
  <div class="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
    <div class="text-lg font-bold">
      <a href="/" class="text-blue-500 hover:text-blue-700">Library App</a>
    </div>
    <div class="flex items-center space-x-4">
      <a href="/" class="text-gray-700 hover:text-blue-500">Home</a>
      <a href="/books" class="text-gray-700 hover:text-blue-500">Books</a>
      <a href="/authors" class="text-gray-700 hover:text-blue-500">Authors</a>   
      <a href="/settings" class="text-gray-700 hover:text-blue-500">
        Settings
      </a>
    </div>
  </div>
</nav>

<div class="pt-16">
  <!-- Content below the fixed menu -->
</div>

{@render children()}
