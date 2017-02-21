import React, {PropTypes} from 'react';
const FlexContainer = (props) => {
    return <div
        className={props.className ? props.className : ''}
        style={{display: 'flex', flexDirection: props.direction}}
    >{props.children}</div>
};
FlexContainer.propTypes = {
    className: PropTypes.string,
    direction: PropTypes.string.isRequired
};

const FlexItem = (props) => {
    return <div
        className={props.className ? props.className : ''}
        style={{flex: props.width}}
    >{props.children}</div>
};
FlexItem.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string.isRequired
};
export {FlexContainer, FlexItem};