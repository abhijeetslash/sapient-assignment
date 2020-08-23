import { getAllInfo, getFilteredInfo } from './useApi';

const getYears = () => {
	const years = [];
	for (let year = 2006; year <= 2020; year++) {
		years.push(year);
	}
	return years;
};

const getAllList = async () => {
	const result = await getAllInfo();
	return result;
};

const getFilteredList = async (queryString) => {
	const result = await getFilteredInfo(queryString);
	return result;
};

const FilterConfig = [
	{
		title: 'Years',
		buttonList: getYears(),
		key: 'launch_year'
	},
	{
		title: 'Launching Success',
		buttonList: [ true, false ],
		key: 'launch_success'
	},
	{
		title: 'Landing Success',
		buttonList: [ true, false ],
		key: 'land_success'
	}
];
export { FilterConfig, getAllList, getFilteredList };
