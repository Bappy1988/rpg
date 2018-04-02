import {ajaxCall} from './ajax.actions';

export const ACTIONS = {
	REQUEST_TIME: 'REQUEST_TIME',
	STORE_TIME: 'STORE_TIME',
	TRY_LOGIN: "TRY_LOGIN"
};

const requestTime = () => {
	return ajaxCall('/api/time', 'GET', '', storeTime());
};

const storeTime = () => {
	return (dispatch, res) => {
		dispatch({type: ACTIONS.STORE_TIME, payload: res.time});
	}
};

const tryAdminLogin = (password) => {
	return ajaxCall('/api/login', 'POST', {password}, storeLogin());
}

const storeLogin = () => {
	return (dispatch, res) => {
		dispatch({type: ACTIONS.TRY_LOGIN, payload: res});
	}
}

export {requestTime, tryAdminLogin};