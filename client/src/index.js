import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore , applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import logger from './store/middleware/logger';
import monitorReducerEnhancer from './store/enhancer/monitorReducer';
import rootReducer from './store/reducers/rootReducer';
import { loadState, saveState} from './localStorage';

const middlewareEnhancer = applyMiddleware(logger, thunk);
const composedEnhancers = compose(
    middlewareEnhancer,
    monitorReducerEnhancer
  )

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composedEnhancers);

store.subscribe(()=>{
    saveState({
        auth: store.getState().auth});
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
