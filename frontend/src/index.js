import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from './components/header/index';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);


