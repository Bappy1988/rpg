import {ajaxCall} from './ajax.actions';

export const ACTIONS = {
    STORE_IMAGE: 'STORE_IMAGE',
    GET_IMAGE: 'GET_IMAGE',
    GET_ALL_IMAGES: 'GET_ALL_IMAGES'
};

const getImages = () => {
	return ajaxCall('/json/images', 'GET', '', gotImages());
};

const gotImages = () => {
    return (dispatch, res) => {
		dispatch({type: ACTIONS.GET_ALL_IMAGES, payload: res});
	}
}


const storeImage = (image) => {
    return ajaxCall('/json/images', 'POST', image, storedImage());
}

const storedImage = () => {
    return (dispatch, res) => {
		dispatch({type: ACTIONS.STORE_IMAGE, payload: res});
	}
}

export {getImages, storeImage};
