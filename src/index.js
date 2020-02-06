import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
)

const container = document.getElementById('app');

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	container
	)
