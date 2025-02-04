<script>
	let { children } = $props();
</script>

<div class="grid-container">
	<header class="top-nav">
		{#if children().header}
			{children().header}
		{/if}
	</header>
  <aside class="sidebar">
		{#if children().sidebarLeft}
			{children().sidebarLeft}
		{/if}
	</aside>

	<main class="content">
		{@render children()}
	</main>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-areas:
			"header header"
			"sidebar content";
		grid-template-columns: 250px 1fr;
		grid-template-rows: auto 1fr;
		height: 100vh;
	}
	.top-nav {
		grid-area: header;
		background: #1e293b;
		color: white;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.sidebar {
		grid-area: sidebar;
		background: #111827;
		color: white;
		padding: 1rem;
	}
	.content {
		grid-area: content;
		padding: 2rem;
	}
</style>
