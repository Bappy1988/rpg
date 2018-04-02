import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import homeReducer from './home.reducer';
import {routerReducer} from 'react-router-redux';
import imageReducer from './images.reducer';

const appReducers = combineReducers({
	auth: authReducer,
	home: homeReducer,
	router: routerReducer,
	images: imageReducer
});
export default appReducers;
