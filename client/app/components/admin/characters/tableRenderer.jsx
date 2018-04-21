import React from 'react';
import PropTypes from 'prop-types';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox';
import uuid from 'uuid';
import * as styles from './characterStyles.scss';

class TableRenderer extends React.Component {
    render() {
        return <Table selectable={false}>
            <TableHead className={styles.header}>
                {Object.keys(this.props.source).map(key => (<TableCell key={uuid()}>{key}</TableCell>))}
            </TableHead>
            <TableRow>
                {Object.keys(this.props.source).map(key => (<TableCell key={uuid()}>{this.props.source[key]}</TableCell>))}
            </TableRow>
        </Table>
    }
}


TableRenderer.propTypes = {
    source: PropTypes.object.isRequired
}

export default TableRenderer;