import { error } from '@sveltejs/kit';
import { locationsData } from '$lib/data/locations';

export function load({ params }) {
	const { id } = params;

	if (!locationsData[id]) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		id,
		location: locationsData[id]
	};
}
