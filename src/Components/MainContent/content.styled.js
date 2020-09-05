import styled from 'styled-components';

export const MainContainer = styled.div`

`;
export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const Item = styled.div`
  flex-basis: 25%;
  position: relative;
  padding: 10px;
  box-sizing: border-box;



@media (min-width: 701px) and (max-width: 1024px) {

    flex-basis: 50%;
    
}

@media(max-width: 700px) {
  
    flex-basis: 100%;
  
}

// @media(min-width: 1400px) {
  
//   flex-basis: 25%;

// }


@media(max-width: 700px) {
  
  flex-basis: 100%;

}

  
	
  `;
export const ItemWrapper = styled.div`
-webkit-box-sizing: initial;
-moz-box-sizing: initial;
box-sizing: initial;
background: white;
margin: 0;
height: 100%;
width: 100%;
overflow: hidden;
-webkit-transition: padding 0.15s cubic-bezier(0.4,0,0.2,1), margin 0.15s cubic-bezier(0.4,0,0.2,1), box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);
transition: padding 0.15s cubic-bezier(0.4,0,0.2,1), margin 0.15s cubic-bezier(0.4,0,0.2,1), box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);
position: relative;
box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
&:hover {
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
}
border-radius: 4px;

`;
export const ItemContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;