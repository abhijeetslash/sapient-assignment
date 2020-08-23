import styled, { keyframes }  from 'styled-components';

const lazyAnimation = keyframes`
0%{background-position:0% 92%}
50%{background-position:100% 9%}
100%{background-position:0% 92%}
`;

export const CardContainer = styled.div`padding: 15px 16px;	`;
export const CardImageContainer = styled.div`
	display: flex;
    justify-content: center;
	margin:30px 10px;
	padding:15px 4px;
	background: #e2e2e2;
	border-radius: 4px;
`;

export const CardWrapper = styled.a`
	display:block;
	text-decoration:none;
	cursor: pointer;
	color: inherit;
	outline: none;
	transition: 0.3s;
	width: 100%;
	height: 100%;


`;

export const LazyCardImageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin:30px 10px;
	padding:15px 34px;
	border-radius: 4px;
	opacity: 0.5;
	background: linear-gradient(135deg, rgba(211,223,232,.5) 30%,rgba(169,184,197,.5) 38%,rgba(168,182,193,.6) 41%,rgba(168,182,193,.6) 50%,rgba(168,182,193,.6) 50%,rgba(169,184,197,.6) 51%,rgba(211,223,232,.6) 57%,rgba(211,223,232,.6) 80%,rgba(211,223,232,.6) 80%);
	background-size: 1200% 1200%;
	animation-name: ${lazyAnimation};
 	animation-duration: 2s;
 	animation-timing-function: ease;
 	animation-iteration-count: infinite;
 	animation-direction: reverse;
`;
export const LazyTextSmall = styled.div`
	width: 30%;
	height: 16px;
	border-radius: 4px;
	opacity: 0.5;
	background: linear-gradient(135deg, rgba(211,223,232,.5) 30%,rgba(169,184,197,.5) 38%,rgba(168,182,193,.6) 41%,rgba(168,182,193,.6) 50%,rgba(168,182,193,.6) 50%,rgba(169,184,197,.6) 51%,rgba(211,223,232,.6) 57%,rgba(211,223,232,.6) 80%,rgba(211,223,232,.6) 80%);
	background-size: 1200% 1200%;
	animation-name: ${lazyAnimation};
 	animation-duration: 2s;
 	animation-timing-function: ease;
 	animation-iteration-count: infinite;
 	animation-direction: reverse;
`;
export const LazyTextBig = styled.div`
	width: 70%;
	height: 18px;
	border-radius: 4px;
	opacity: 0.5;
	background: linear-gradient(135deg, rgba(211,223,232,.5) 30%,rgba(169,184,197,.5) 38%,rgba(168,182,193,.6) 41%,rgba(168,182,193,.6) 50%,rgba(168,182,193,.6) 50%,rgba(169,184,197,.6) 51%,rgba(211,223,232,.6) 57%,rgba(211,223,232,.6) 80%,rgba(211,223,232,.6) 80%);
	background-size: 1200% 1200%;
	animation-name: ${lazyAnimation};
 	animation-duration: 2s;
 	animation-timing-function: ease;
 	animation-iteration-count: infinite;
 	animation-direction: reverse;
`;

export const LazyCardWrapper = styled.div`

	transition: 0.3s;
	width: 100%;
	height: 100%;


`;





