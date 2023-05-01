<script lang="ts">
  import Footer from "../lib/components/footer.svelte";
</script>

<main class="container">
	<nav>
    <ul>
      <li><strong>Paris Real Estate</strong></li>
    </ul>
    <ul>
      <li>Properties</li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>
	<section class="hero">
		<h1>Find Your Dream Home in Paris</h1>
	</section>
	<section class="properties">
		<div class="grid">
			<div class="property">
				<img src={'/appartment1.jpg'} alt="Property 1" class="thumbnail" />
				<h2>Charming Apartment in the Heart of Paris</h2>
				<p>2 bedrooms / 2 bathrooms / 1,000 sqft</p>
				<p>Price: €1,000,000</p>
			</div>
			<div class="property">
				<img src={'/appartment2.jpg'} alt="Property 2" class="thumbnail" />
				<h2>Stylish Loft in Le Marais</h2>
				<p>3 bedrooms / 2 bathrooms / 1,500 sqft</p>
				<p>Price: €1,500,000</p>
			</div>
		</div>
	</section>
  <Footer />
</main>


<style>
	.hero {
		background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/jumbotron.jpg');
		background-size: cover;
		background-position: center;
		height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 3rem;
	}

	.property {
		margin: 2rem;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 10px;
	}

	.property h2 {
		margin-bottom: 0.5rem;
	}

	.property p {
		margin-bottom: 0;
	}

	.property img {
		max-width: 300px;
		border-radius: 10px;
		margin-bottom: 2rem;
	}
</style>
