import React from 'react';
import {Row, Col} from 'components/common/grid';
import sampleCharacter from '../sampleCharacter';
import CharacterSheet from './characters/characterSheet';

class Characters extends React.Component {
    render() {
        return <div>
            <Row>
                <Col md={8}>
                </Col>
                <Col md={4}>
                    <CharacterSheet characterData={sampleCharacter} />
                </Col>
            </Row>
        </div>
    }
}

export default Characters;