import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardTitle, CardText } from 'react-toolbox/lib/card';
import {Row, Col} from 'components/common/grid';
import Table from 'react-toolbox/lib/table';

class CharacterSheet extends React.Component {
    objectToModel(object) {
        let objectToReturn = {};
        Object.keys(object).forEach(key => {
            objectToReturn[key] = {type: Number}
        });
        return objectToReturn;
    }
    render() {
        return <Card raised>
            <CardTitle title={this.props.characterData.biography.name}/>
            <CardText>
                <Row>
                    <Col md={2}><b>Species</b></Col><Col md={4}>{this.props.characterData.biography.species}</Col>
                    <Col md={2}><b>Rank</b></Col><Col md={4}>{this.props.characterData.biography.rank}</Col>
                    <Col md={2}><b>Environment</b></Col><Col md={4}>{this.props.characterData.biography.environment}</Col>
                    <Col md={2}><b>Upbringing</b></Col><Col md={4}>{this.props.characterData.biography.upbringing}</Col>
                    <Col md={2}><b>Assignment</b></Col><Col md={10}>{this.props.characterData.biography.assignment}</Col>
                    <Col md={2}><b>Traits</b></Col><Col md={4}>{this.props.characterData.biography.traits.join(', ')}</Col>
                </Row>
                <h5>Attributes</h5>
                <Table model={this.objectToModel(this.props.characterData.stats.attributes)} source={this.props.characterData.stats.attributes}/>
                <h5>Disciplines</h5>
                <Table model={this.objectToModel(this.props.characterData.stats.disciplines)} source={this.props.characterData.stats.disciplines}/>
            </CardText>
        </Card>
    }
}

CharacterSheet.propTypes = {
    characterData: PropTypes.object.isRequired
}

export default CharacterSheet;