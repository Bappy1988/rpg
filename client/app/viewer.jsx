import React from 'react';
import {connect} from 'react-redux';
import {getCurrentImage} from 'actions/images.actions';


class Viewer extends React.Component {
    constructor() {
        super();
        this.state = {
            currentImageInterval: false
        }
    }

    componentWillMount() {
        this.setState({
            currentImageInterval: setInterval(()=>this.props.getCurrentImage(this.props.currentImage.id),500)
        })
        document.body.style.backgroundColor="black";
    }

    componentWillUnmount() {
        clearInterval(this.state.currentImageInterval);
    }
    render () {
        return <div style={{
            width: "100vw", 
            height: "100vh",
            backgroundImage: "url(\"" + this.props.currentImage.data + "\")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%"
        }}/>
    }
}

export default connect(
    state => {
        return {
            currentImage: state.images.currentImage
        }
    },
    dispatch => {
        return {
            getCurrentImage: (id) => dispatch(getCurrentImage(id))
        }
    }
)(Viewer);