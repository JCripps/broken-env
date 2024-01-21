import { TEST2 } from '$env/static/private';

export function GET() {
	const res = {
		res: TEST2
	};

	return new Response(JSON.stringify(res));
}
