import ajax from '../util/ajax';

export function ajaxCall(url, method, data, nextAction, loadAction=null) {
    return (dispatch/*, getState*/) => {
        //let state = getState();
        let headers = [];
        /*if(state.authReducer.token) {
            headers.push({name:'token', value:state.authReducer.token});
        }*/
        if(loadAction) {
			dispatch({type: loadAction});
        }
        ajax(url, method, data, headers).then(
            res => {
                let decoded;
                try {
                    decoded = JSON.parse(res);
                } catch(e) {
                    //dispatch({type:'AJAX_ERROR', payload: {error: 'Could not decode response'}});
                    return;
                }
                switch(typeof nextAction) {
                    case 'object':
                        nextAction.payload.data = decoded;
                        dispatch(nextAction);
                        break;
                    case 'function':
                        nextAction(dispatch, decoded);
                        break;
                    case 'string':
                        dispatch({type: nextAction, payload: decoded});
                        break;
                    default:
                        throw new Error('Unknown action type passed to ajaxCall');
                }
            },
            err => dispatch({type: nextAction, payload: err})
        );
    }
}
