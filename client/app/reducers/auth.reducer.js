import {ACTIONS} from '../actions/home.actions';

const initialState = {
	loggedIn: false
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case ACTIONS.TRY_LOGIN:
			if(action.payload.ok){
				return {loggedIn: true, key: action.payload.key}
			} else {
				return initialState
			}
		default:
			return state;
	}
};

export default authReducer;