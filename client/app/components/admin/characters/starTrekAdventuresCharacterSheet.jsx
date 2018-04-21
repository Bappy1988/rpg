import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardTitle, CardText } from 'react-toolbox/lib/card';
import {Row, Col} from 'components/common/grid';
import TableRenderer from './tableRenderer';
import uuid from 'uuid';

class StarTrekAdventuresCharacterSheet extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    mapCharacterData() {
        //map the character data into the state
        return {
            ...this.state,
            species: this.props.characterData.biography.species,
            rank: this.props.characterData.biography.rank,
            environment: this.props.characterData.biography.environment,
            upbringing: this.props.characterData.biography.upbringing,
            assignment: this.props.characterData.biography.assignment,
            traits: this.props.characterData.biography.traits,
            focuses: this.props.characterData.stats.focuses,
            values: this.props.characterData.stats.values,
            determination: this.props.characterData.stats.determination,
            maxDetermination: this.props.characterData.stats.maxDetermination,
            talents: this.props.characterData.stats.talents,
            injuries: this.props.characterData.condition.injuries,
            stress: this.props.characterData.condition.stress,
            maxStress: this.props.characterData.condition.maxStress,
            otherEquipment: this.props.characterData.equipment.other
        }
    }

    componentDidMount() {
        this.setState(this.mapCharacterData());
    }

    handleChange(name, event, index) {
        if (typeof index === "undefined"){
            this.setState({...this.state, [name]: event.currentTarget.value, updatedObject: undefined});
        } else {
            let theArray = this.state[name];
            if (event.currentTarget.value.length){
                theArray[index] = event.currentTarget.value;
            } else {
                theArray.splice(index,1);
            }
            this.setState({...this.state, [name]: theArray, updatedObject: name+index});
        }
        
    }

    componentDidUpdate() {
        if (this.state.updatedObject){
            let ele = document.getElementById(this.state.updatedObject);
            if (ele) {
                ele.focus();
                ele.setSelectionRange(ele.value.length, ele.value.length);
            }
        }
    }
    
    textValue(name, size=15){
        if (typeof this.state[name] === 'undefined') {
            return '';
        }
        if (this.props.editable){
            return <input type="text" value={this.state[name]} onChange={(value)=>this.handleChange(name,value)} size={size}/>
        } else {
            return this.state[name];
        }
    }

    arrayValues(name,size=15,direction='ltr'){
        if (typeof this.state[name] === 'undefined') {
            return '';
        }
        if (this.props.editable){
            let style = {}
            if (direction === 'ltr') {
                style = {float: "left"};
            }
            return <div style={style}>{this.state[name].map((item,index)=>(
                <input id={name+index} key={uuid()} type="text" value={this.state[name][index]} onChange={(value)=>this.handleChange(name,value,index)} size={size}/>
            ))}<input id={name+this.state[name].length} key={uuid()} type="text" value='' onChange={(value)=>this.handleChange(name,value,this.state[name].length)} size={size}/>
            </div>
        } else {
            return direction === 'ltr' ? this.state[name].join(', ') : this.state[name].map(value=>(<p key={uuid()}>{value}</p>));
        }
    }

    render() {
        return <Card raised>
            <CardTitle title={this.props.characterData.biography.name}/>
            <CardText>
                <Row>
                    <Col md={2}><b>Species</b></Col><Col md={4}>{this.textValue('species')}</Col>
                    <Col md={2}><b>Rank</b></Col><Col md={4}>{this.textValue('rank')}</Col>
                    <Col md={2}><b>Environment</b></Col><Col md={4}>{this.textValue('environment')}</Col>
                    <Col md={2}><b>Upbringing</b></Col><Col md={4}>{this.textValue('upbringing')}</Col>
                    <Col md={2}><b>Assignment</b></Col><Col md={10}>{this.textValue('assignment',40)}</Col>
                    <Col md={2}><b>Traits</b></Col><Col md={10}>{this.arrayValues('traits',5,'ltr')}</Col>
                </Row>
                <h3>Attributes</h3>
                <TableRenderer source={this.props.characterData.stats.attributes} />
                <h3>Disciplines</h3>
                <TableRenderer source={this.props.characterData.stats.disciplines} />
                <Row>
                    <Col md={6}>
                        <h3>Values</h3>
                        {this.arrayValues('values',15,'ttb')} 
                        <br />  
                        <b>Determination: </b>{this.textValue('determination',1)}/{this.textValue('maxDetermination',1)}
                    </Col>
                    <Col md={6}>
                        <h3>Focuses</h3>
                        {this.arrayValues('focuses',15,'ttb')}   
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3>Talents</h3>
                        {this.arrayValues('talents',15,'ttb')} 
                        <br />  
                    </Col>
                    <Col md={6}>
                        <h3>Injuries</h3>
                        {this.arrayValues('injuries',15,'ttb')}   
                        <br />
                        <b>Stress: </b>{this.textValue('stress',1)}/{this.textValue('maxStress',1)}
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3>Weapons</h3>
                        {this.props.characterData.equipment.weapons.map(weapon=>(<p key={uuid()}>
                            <b>Name: </b>{weapon.type} &nbsp;&nbsp;&nbsp;<b>DMG: </b>{weapon.damage}<br />
                            <b>Qualities: </b>{weapon.size} {weapon.qualities.join(', ')}<br />
                        </p>))}
                    </Col>
                    <Col md={6}>
                        <h3>Other Equipment</h3>
                        {this.arrayValues('otherEquipment',15,'ttb')}   
                    </Col>
                </Row>
                
                
            </CardText>
        </Card>
    }
}

StarTrekAdventuresCharacterSheet.propTypes = {
    characterData: PropTypes.object.isRequired,
    editable: PropTypes.bool
}

export default StarTrekAdventuresCharacterSheet;