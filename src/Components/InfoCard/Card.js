import React from 'react';
import { CardContainer, CardWrapper, CardImageContainer } from './Card.styled';

const placeholderImageSrc = `https://via.placeholder.com/150`

function Card({ name, mission_ids, src, year, launch_success, land_success, flight_number, article_link }) {
	return (
		<React.Fragment>
			<CardWrapper  href={`${article_link}`} target="_blank">
				<CardImageContainer>
					<img src={src?src:placeholderImageSrc} width={150} height={150} alt=""/>
				</CardImageContainer>
				<CardContainer >
					<h3 style={{ color: 'blue' }}>{`${name} #${flight_number}`}</h3>
					<p>
						<strong>Mission Ids:</strong>{' '}
					</p>
					<ul>{mission_ids && mission_ids.map((id, i) => <li key={i}><span style={{fontWeight:'300'}}> {id} </span></li>)}</ul>
					<p>
						<strong> Launch year: </strong> <span style={{fontWeight:'300'}}> {year} </span>
					</p>
					<p>
						<strong>Launch Success: </strong>
						<span style={{fontWeight:'300'}}> {launch_success} </span>
					</p>
					<p>
						<strong>Land Success: </strong>
						<span style={{fontWeight:'300'}}> {land_success} </span>
					</p>
				</CardContainer>
			</CardWrapper>
		</React.Fragment>
	);
}

export default Card;
