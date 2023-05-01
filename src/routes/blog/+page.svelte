<script lang="ts">
	import type { PageData } from './$types';
	import Footer from '../../lib/components/footer.svelte';
	export let data: PageData;
</script>

<main class="container">
	<nav>
		<ul>
			<li><strong>Paris Real Estate</strong></li>
		</ul>
		<ul>
			<li><a href="/">Properties</a></li>
			<li>Blog</li>
		</ul>
	</nav>
	<section>
		<h1>Make sure you check our posts</h1>
		<ul>
			{#each data.entries as entry}
				<li>
					{entry.title}
				</li>
			{/each}
		</ul>
	</section>
	<Footer />
</main>
