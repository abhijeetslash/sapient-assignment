import React from 'react';
import { MainWrapper, SidePanelWrapper, ContentWrapper, Header, Footer } from './Layout.styled';
import Filter from '../Filter/Filter';
import Content from '../MainContent/content';
import {Helmet} from 'react-helmet';

function Layout({ history, nofilter }) {
	return (
		<React.Fragment>
			<Helmet>
				<meta charset="utf-8" /> 
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Web app created using create-react-app to display 
							Elon musk space X rocket launch info using cards 
							with filter year, launch date and land success"
				/>
				<meta
					name="robots"
					content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<link rel="canonical" href="https://spacexlaunchcards.com"/>
			</Helmet>
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
