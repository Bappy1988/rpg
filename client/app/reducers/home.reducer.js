import * as actions from '../actions/home.actions';

const initialState = {
	time: 0
};

const homeReducer = (state = initialState, action) => {
	let mutatedState = Object.assign({}, state);
	switch(action.type) {
		case actions.ACTIONS.STORE_TIME:
			mutatedState.time = action.payload;
			return mutatedState;
		default:
			return state;
	}
};

export default homeReducer;