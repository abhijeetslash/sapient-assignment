import styled from 'styled-components';
export const FilterWrapper = styled.div`
	width: 90%;
	background: white;
	position: relative;
	margin-top: 10px;
	border-radius: 4px;
	@media (min-width: 701px) and (max-width: 1024px) {
		padding-bottom: 10px;
	}

	@media (max-width: 700px) {
		padding-bottom: 15px;
	}
`;
export const ButtonWrapper = styled.div`
	display: -ms-flex;
	display: -webkit-flex;
	flex-basis: 45%;
	cursor: pointer;
	width: 50%;
`;
export const Heading = styled.div`
	display: flex;
	flex: 1;
`;
export const HeadingTitle = styled.div`
	justify-content: flex-start;
	padding: 15px;
	font-size: 20px;
	font-weight: 900;
	flex: 1;
	`;
export const HeadingAction = styled.div`
	justify-content: flex-end;
	flex: 1;
	text-align: right;
	position: relative;
	
	& > span {
		font-size: 14px;
		margin-top: 7px;
		padding: 5px 15px;
		border-radius: 3px;
		background: lightgray;
		cursor:pointer;
		box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
		&:hover {
			box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
		}
		position: absolute;
		top: 6px;
		right: 15px;
	}
`;

export const FilterHeader = styled.div`
	display: flex;
	justify-content: center;
	text-decoration: underline;
	margin: 20px 0;
`;
export const Button = styled.div`
	padding: 10px 15px;
	background: ${({ active }) => (active ? 'green' : 'limegreen')};
	border-radius: 4px;
	margin-bottom: 10px;
`;
export const ButtonListWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	margin-left: calc(20%);
`;
