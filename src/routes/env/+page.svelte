<script lang="ts">
	import { TEST1 } from '$env/static/public';

	console.log(TEST1);

	export let data;
	console.log(data);
</script>

<h1>Broken env</h1>
<p>Public env: {TEST1}</p>
<p>Private env: {data}</p>