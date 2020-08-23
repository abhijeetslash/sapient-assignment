import React from 'react';
import { MainWrapper, SidePanelWrapper, ContentWrapper, Header, Footer } from './Layout.styled';
import Filter from '../Filter/Filter';
import Content from '../MainContent/content';

function Layout({ history, nofilter }) {
	return (
		<React.Fragment>
			<Header> SpaceX Launch Programs</Header>
			<MainWrapper>
				<SidePanelWrapper>					
					<Filter history={history} nofilter={nofilter} />
				</SidePanelWrapper>
				<ContentWrapper>
					<Content nofilter={nofilter} />
				</ContentWrapper>
			</MainWrapper>
			<Footer> <span style={{fontWeight:'600',fontSize:'17px', marginRight:'4px'}}>Developed By:</span> Abhijeet Mukherjee</Footer>
		</React.Fragment>
	);
}

export default Layout;
