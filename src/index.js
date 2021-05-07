import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './component/counter/reducer';
import CounterContainer from './component/counter/counter';

const store = createStore(counterReducer)

ReactDOM.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
    document.getElementById('root')
);