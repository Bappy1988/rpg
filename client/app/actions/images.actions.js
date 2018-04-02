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

const getCurrentImage = (id) => {
    return ajaxCall('/json/selectedImage', 'GET', '', gotSelectedImage(id));
} 

const gotSelectedImage = (id) => {
    return (dispatch, res) => {
        if (res.id !== id){
            dispatch(ajaxCall('/json/images/' + res.id, 'GET', '', gotOneImage()));
        }
    }
}

const gotOneImage = () =>{
    return (dispatch, res) => {
		dispatch({type: ACTIONS.GET_IMAGE, payload: res});
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

const setImage = (id) => {
    return ajaxCall('/json/selectedImage', 'POST', {id} );
}


export {getImages, storeImage, getCurrentImage, setImage};
