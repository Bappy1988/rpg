import React from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'components/common/grid';
import { Card, CardTitle,  CardText, BrowseButton, Input, Button , List, ListItem, IconButton} from 'react-toolbox';

import {storeImage, getImages, getCurrentImage, setImage} from 'actions/images.actions';

class AdminViewscreen extends React.Component {

    constructor() {
        super();
        this.state = {
            fileData: false,
            newImageName: "",
            selectedImage: false,
            currentImageInterval: false
        }
        this.fileReader = new FileReader();
        this.fileReader.onloadend = ()=>{
            this.setState({fileData: this.fileReader.result});
        }
    }

    handleFileSelect(e){
        let file = e.target.files[0];
        if (this.fileReader.readyState !== 1) {
            this.fileReader.readAsDataURL(file);
            this.setState({newImageName: file.name});
        }
    }

    handleUpload() {
        this.props.storeImage({
            data: this.state.fileData,
            name: this.state.newImageName
        })
        this.setState({
            fileData: false,
            newImageName: ""
        });
    }

    getSpecificImage(id) {
        let filtered = this.props.images.filter(image => {
            return image.id === id;
        });
        if (filtered.length){
            return filtered[0];
        } else {
            return false;
        }
    }

    componentWillMount() {
        this.props.getImages();
        this.setState({
            currentImageInterval: setInterval(()=>this.props.getCurrentImage(this.props.currentImage.id),500)
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.currentImageInterval);
    }

    mapImages() {
        return this.props.images.map(image => {
            return <ListItem key={image.id} avatar={image.data} caption={image.name} onClick={()=>this.setState({selectedImage: image.id})} />
        })
    }

    render() {
        let selectedImage = false;
        if (this.state.selectedImage !== false) {
            selectedImage = this.getSpecificImage(this.state.selectedImage);
        }
        return <Row>
            <Col md={7}> 
                <Row>
                    <Card raised style={{marginBottom: "16px"}}>
                        <CardTitle title="Upload New Images"/>
                        <CardText>
                            <BrowseButton icon="search" name="fileUpload" label="choose file" onChange={(e)=>this.handleFileSelect(e)}/>
                            {this.state.fileData && <div>
                                <img style={{width: "100%", height: "auto"}}src={this.state.fileData}/>
                                <Input type="text" value={this.state.newImageName} onChange={val=>this.setState({newImageName: val})} label="Image name"/>
                                <Button icon="file_upload" label="upload" raised primary onClick={()=>this.handleUpload()}/>
                            </div>}
                        </CardText>
                    </Card>
                </Row>
                <Row>
                    <Card raised>
                        <CardTitle title="Existing Images" avatar={<IconButton icon="refresh" onClick={()=>this.props.getImages()}/>}/>
                        <CardText>
                            <List selectable ripple>
                                {this.mapImages()}
                            </List>
                        </CardText>
                    </Card>    
                </Row>
            </Col>
            <Col md={5}> 
                <Row>
                    <Card raised style={{marginBottom: "16px"}}>
                        <CardTitle title="Current Display Image"/>
                        <CardText>
                            {this.props.currentImage && 
                            <Row>
                                <Col md={8}>
                                    {this.props.currentImage.id && <img 
                                        src={this.props.currentImage.data}
                                        style={{width: "100%", height: "auto"}}
                                    />}
                                </Col>
                                <Col md={4}>
                                    {this.props.currentImage.id && <div><p>
                                        {this.props.currentImage.name}
                                    </p>
                                    <Button label="unset image" onClick={()=>this.props.setImage(false)}/>
                                    </div>}
                                </Col>
                            </Row>}
                            {!this.props.currentImage && <p>No image has been set.</p>}
                        </CardText>
                    </Card>
                </Row>
                <Row>
                    <Card raised style={{marginBottom: "16px"}}>
                        <CardTitle title="Currently Selected Image"/>
                        <CardText>
                            {selectedImage !== false && 
                            <Row>
                                <Col md={8}>
                                    {selectedImage && <img 
                                        src={selectedImage.data}
                                        style={{width: "100%", height: "auto"}}
                                    />}
                                </Col>
                                <Col md={4}>
                                    {selectedImage && <div><h4>
                                        {selectedImage.name}
                                    </h4>
                                    <Button label="deselect image" accent raised onClick={()=>this.setState({selectedImage: false})} /><br /><br />
                                    <Button label="display on viewscreen" primary raised onClick={()=>this.props.setImage(selectedImage.id)} />
                                    </div>}
                                </Col>
                            </Row>}
                            {this.state.selectedImage === false && <p>No image has been selected</p>}
                        </CardText>
                    </Card>
                </Row>
            </Col>
        </Row>
    }
}

export default connect(
    state => {
        return {
            images: state.images.images,
            currentImage: state.images.currentImage
        }
    },
    dispatch => {
        return {
            storeImage: (image) => dispatch(storeImage(image)),
            getImages: () => dispatch(getImages()),
            getCurrentImage: (id) => dispatch(getCurrentImage(id)),
            setImage: (id) => dispatch(setImage(id))
        }
    }
)(AdminViewscreen);