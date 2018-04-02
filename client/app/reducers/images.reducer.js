import * as actions from '../actions/images.actions';

const initialState = {
	images: [],
	currentImage: {}
};

const imageReducer = (state = initialState, action) => {
	let mutatedState = Object.assign({}, state);
	switch(action.type) {
		case actions.ACTIONS.GET_ALL_IMAGES:
			mutatedState.images = action.payload;
			return mutatedState;
		case actions.ACTIONS.GET_IMAGE:
			mutatedState.currentImage = action.payload;
			return mutatedState;
		default:
			return state;
	}
};

export default imageReducer;