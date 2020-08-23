import React from 'react';
import { useQuery } from '../../hooks/useQuery';
import { getAllList, getFilteredList } from '../../hooks/useFilter';
import { MainContainer, Item, ItemWrapper, ItemContainer, Row } from './content.styled';
import Card from '../InfoCard/Card';
import LazyPlaceholderCard from '../InfoCard/LazyPlaceholderCard';

function Content(props) {
	const query = useQuery();
	const [ list, setList ] = React.useState([]);

	const getNoFilterData = async () => {
		let data = await getAllList();
		setList(data);
	};
	const getFilterData = async (filters) => {
		let data = await getFilteredList(filters);
		setList(data);
	};

	React.useEffect(
		() => {
			const filters = query.toString();
			if (filters === '') {
				getNoFilterData();
			} else {
				getFilterData(filters);
			}
		},
		[ query.toString() ]
	);

	const LazyCard = (key) => (
		<Item key={key} >
			<ItemWrapper>
				<ItemContainer>
					<LazyPlaceholderCard />
				</ItemContainer>
			</ItemWrapper>
		</Item>
	);

	const renderCards = (cards) => {
		if(!cards){
			return <h1>'Fetching...'</h1>
		}
		return (
			<MainContainer>
				<Row>
					{cards.length > 0 &&
						cards.map((card, index) => (
								<Item  key={index}>
									<ItemWrapper>
										<ItemContainer>
											<Card
												name={card.mission_name}
												src={card[`links`].mission_patch}
												launch_success={
													card.launch_success ? card.launch_success.toString() : 'NA'
												}
												land_success={
													card[`rocket`].first_stage.cores[0].land_success ? (
														card[`rocket`].first_stage.cores[0].land_success.toString()
													) : (
														`NA`
													)
												}
												flight_number={card.flight_number}
												year={card.launch_year}
												mission_ids={card.mission_id}
												article_link={card[`links`].article_link}
											/>
										</ItemContainer>
									</ItemWrapper>
								</Item>
						))}
				</Row>
			</MainContainer>
		);
	};

	return <React.Fragment>{renderCards(list)}</React.Fragment>;
}

export default Content;
