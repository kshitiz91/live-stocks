import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './components/home';
import configureStore from './store';
import {Provider} from 'react-redux';
import rootSaga from './saga'

const preloadedState = {};

const store = configureStore(preloadedState);
store.runSaga(rootSaga);

ReactDOM.render(
<Provider store = {store}>
	<Home />
</Provider>, document.getElementById('root'));

