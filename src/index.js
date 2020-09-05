import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { RenderApp } from './routes';
import './index.css';

ReactDOM.render(
		<BrowserRouter>
			<RenderApp />
		</BrowserRouter>,
	document.getElementById('root')
);

serviceWorker.register();
