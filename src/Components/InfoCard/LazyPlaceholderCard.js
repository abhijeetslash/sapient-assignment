import React from 'react';
import { CardContainer, CardWrapper, LazyCardImageContainer, LazyTextBig, LazyTextSmall } from './Card.styled';

function LazyPlaceholderCard(props) {
	return (
		<div>
			<React.Fragment>
				<CardWrapper>
					<LazyCardImageContainer />
					<CardContainer>
						<br />
						<LazyTextBig />
						<br />
						<LazyTextBig />
						<br />
						<LazyTextBig />
						<LazyTextSmall />
						<br />
					</CardContainer>
				</CardWrapper>
			</React.Fragment>
		</div>
	);
}

export default LazyPlaceholderCard;
