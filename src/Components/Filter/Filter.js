import React from 'react';
import { FilterConfig } from '../../hooks/useFilter';
import { FilterWrapper, ButtonWrapper, ButtonListWrapper, Button, FilterHeader, Heading, HeadingTitle, HeadingAction } from './Filter.styled';
import { useQuery } from '../../hooks/useQuery';

function Filter({ history, launch_success, land_success, year }) {
	const query = useQuery();
	const applyFilterChange = (value, type) => {
		query.set(type, value);
		history.push(`/filters?${query.toString()}`);
	};
	const resetFilters = () => {
		history.push(`/`);
	};
	const checkActive = (queryKey, value) => {
		return queryKey ? queryKey.toString() === value : false;
	};

	const renderFilters = (config) => {
		return config.map((filter) => (
			<React.Fragment key={filter.key}>
				
				<FilterHeader>{filter.title}</FilterHeader>
				<ButtonListWrapper>
					{filter.buttonList.map((button, i) => (
						<ButtonWrapper key={i} onClick={() => applyFilterChange(button, filter.key)}>
							<Button active={checkActive(query.get(`${filter.key}`), `${button}`)}>
								{`${button}`}{' '}
							</Button>
						</ButtonWrapper>
					))}
				</ButtonListWrapper>
			</React.Fragment>
		));
	};
	return <FilterWrapper>
	<Heading> <HeadingTitle>Filters</HeadingTitle> <HeadingAction onClick={resetFilters} > <span> Reset </span>  </HeadingAction></Heading>
	{renderFilters(FilterConfig)}</FilterWrapper>;
}

export default Filter;
