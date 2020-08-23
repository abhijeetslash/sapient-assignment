import axios from 'axios';
const BASE_URL = `https://api.spacexdata.com/v3`;
export const client = axios.create({
	baseURL: BASE_URL,
	timeout: 10000
});

export const noFilterList = () => `launches?limit=100`;
export const withFilterList = (queryString) => `launches?limit=100&${queryString}`;
