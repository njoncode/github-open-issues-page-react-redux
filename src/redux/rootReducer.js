import { combineReducers } from 'redux';

import {githubReducer} from './reducers/githubReducer';
import {counterReducer} from './reducers/counterReducer';


const rootReducer = combineReducers({
    github: githubReducer,
    counter: counterReducer
});

export default rootReducer;