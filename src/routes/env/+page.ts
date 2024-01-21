// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function load({ fetch }: any) {
	const res = await fetch('./env');

	console.log(res);

	const json = await res.json();

	return json;
}
