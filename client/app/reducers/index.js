import {combineReducers} from 'redux';
import homeReducer from './home.reducer';
import {routerReducer} from 'react-router-redux';

const appReducers = combineReducers({home:homeReducer, routing:routerReducer});
export default appReducers;