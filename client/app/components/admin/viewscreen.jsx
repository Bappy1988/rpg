import React from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'components/common/grid';
import { Card, CardTitle,  CardText, BrowseButton, Input, Button} from 'react-toolbox';

import {storeImage} from 'actions/images.actions';

class AdminViewscreen extends React.Component {

    constructor() {
        super();
        this.state = {
            fileData: false,
            newImageName: ""
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

    render() {
        return <Row>
            <Col md={4}>
                <Card raised>
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
            </Col>
        </Row>
    }
}

export default connect(
    ()=>{
        return {}
    },
    dispatch => {
        return {
            storeImage: (image) => dispatch(storeImage(image))
        }
    }
)(AdminViewscreen);