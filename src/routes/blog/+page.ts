export async function load({ fetch }) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const entries = await res.json();
	return { entries };
}
