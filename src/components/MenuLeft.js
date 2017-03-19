import React from 'react';

import '../styles/MenuLeft.scss';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	handleClick(e) {
		e.stopPropagation();
		e.preventDefault();

		this.props.chose();
	}
	render() {
		let MenuLeftClass = 'left-li';
		if (this.props.state.isChosed) {
			MenuLeftClass += ' chosed';
		}
		return (
			<li className={MenuLeftClass} onClick={this.handleClick.bind(this)}>{this.props.data.name}</li>
		);
	}
}