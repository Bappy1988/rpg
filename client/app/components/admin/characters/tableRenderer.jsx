import React from 'react';
import PropTypes from 'prop-types';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox';
import uuid from 'uuid';
import * as styles from './characterStyles.scss';

class TableRenderer extends React.Component {

    value(key) {
        if (this.props.editable){
            return <input type="text" value={this.props.source[key]} onChange={(value)=>this.props.editCallback(key,value)} size={3}/>
        } else {
            return this.props.source[key];
        }
    }

    render() {
        return <Table selectable={false}>
            <TableHead className={styles.header}>
                {Object.keys(this.props.source).map(key => (<TableCell key={uuid()}>{key}</TableCell>))}
            </TableHead>
            <TableRow>
                {Object.keys(this.props.source).map(key => (<TableCell key={uuid()}>{this.value(key)}</TableCell>))}
            </TableRow>
        </Table>
    }
}


TableRenderer.propTypes = {
    source: PropTypes.object.isRequired,
    editable: PropTypes.bool,
    editCallback: PropTypes.func
}

export default TableRenderer;