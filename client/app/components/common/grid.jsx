import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './grid.styles';

class Row extends React.Component {
	render() {
		return <div className={styles.row}>
			{this.props.children}
		</div>
	}
}

class Col extends React.Component {
	render() {
		let classes = {};
		classes[styles.col] = true;
		if(this.props.xs) {
			classes[styles['xs-' + this.props.xs]] = true;
		}
		if(this.props.xsOffset) {
			classes[styles['xs-offset-' + this.props.xsOffset]] = true;
		}
		if(this.props.sm) {
			classes[styles['sm-' + this.props.sm]] = true;
		}
		if(this.props.smOffset) {
			classes[styles['sm-offset-' + this.props.smOffset]] = true;
		}
		if(this.props.md) {
			classes[styles['md-' + this.props.md]] = true;
		}
		if(this.props.mdOffset) {
			classes[styles['md-offset-' + this.props.mdOffset]] = true;
		}
		if(this.props.lg) {
			classes[styles['lg-' + this.props.lg]] = true;
		}
		if(this.props.lgOffset) {
			classes[styles['lg-offset-' + this.props.lgOffset]] = true;
		}
		if(this.props.xl) {
			classes[styles['xl-' + this.props.xl]] = true;
		}
		if(this.props.xlOffset) {
			classes[styles['xl-offset-' + this.props.xlOffset]] = true;
		}
		return <div className={classNames(classes)}>
			{this.props.children}
		</div>
	}
}
Col.propTypes = {
	xs: PropTypes.number,
	xsOffset: PropTypes.number,
	sm: PropTypes.number,
	smOffset: PropTypes.number,
	md: PropTypes.number,
	mdOffset: PropTypes.number,
	lg: PropTypes.number,
	lgOffset: PropTypes.number,
	xl: PropTypes.number,
	xlOffset: PropTypes.number
};

export {Row, Col};
