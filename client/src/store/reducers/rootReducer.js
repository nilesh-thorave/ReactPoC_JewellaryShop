import productReducer from './productReducer';
import feedbackReducer from './feedbackReducer';

import {combineReducers} from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    feedback: feedbackReducer
});

export default rootReducer;  