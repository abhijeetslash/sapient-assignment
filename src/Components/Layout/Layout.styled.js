import styled from 'styled-components';

export const MainWrapper = styled.div`
	display: flex;
	height: 89vh;
	flex-flow: row wrap;
	justify-content: flex-start;
	/* align-items: stretch; */

`;
export const Header = styled.div`
	font-weight: 600;
	font-size: 32px;
	margin-left: 15px;
`;
export const Footer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	 padding-top: 15px;
	@media (min-width: 701px) and (max-width: 1024px) {
		position:fixed;
		bottom:0;
		background: white;
		text-align:center;
		width:100vw;
		padding-bottom: 15px;
	}


`;
export const SidePanelWrapper = styled.div`
	flex-basis: 25%;
	display: flex;
	justify-content: center;

	@media (min-width: 701px) and (max-width: 1024px) {
		flex-basis: 30.0%;
	}

	@media (max-width: 700px) {
		flex-basis: 100%;
	}
`;
export const ContentWrapper = styled.div`
	flex-basis: 75%;
	display: flex;
	justify-content: flex-start;
	height: 89vh;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 0px;
		background: transparent;
		justify-content: flex-start;
	}
			@media (min-width: 601px) and (max-width: 1024px) {
				flex-basis: 55%;
				margin-top: 20px;
				justify-content: flex-start;
			}
			
			@media (max-width: 700px) {
				flex-basis: 100%;
				overflow-y: unset;
				justify-content: flex-start;
			}
`
