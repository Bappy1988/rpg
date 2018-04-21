import React from 'react';
import {Row, Col} from 'components/common/grid';
import sampleCharacter from '../sampleCharacter';
import StarTrekAdventuresCharacterSheet from './characters/starTrekAdventuresCharacterSheet';

class Characters extends React.Component {
    render() {
        return <div>
            <Row>
                <Col md={6}>
                </Col>
                <Col md={6}>
                    <StarTrekAdventuresCharacterSheet characterData={sampleCharacter} editable={true}/>
                </Col>
            </Row>
        </div>
    }
}

export default Characters;