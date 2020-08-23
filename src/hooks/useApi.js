import { noFilterList, withFilterList, client } from '../api';

export const getAllInfo = async () => {
	try {
		let result = await client.get(noFilterList());
		return result.data;
	} catch (err) {
		alert('failed to load info');
	}
};

export const getFilteredInfo = async (query) => {
	try {
		let result = await client.get(withFilterList(query));
		return result.data;
	} catch (err) {
		alert('failed to load filtered info');
	}
};
