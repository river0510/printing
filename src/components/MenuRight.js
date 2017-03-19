import React from 'react'
import '../styles/MenuRight.scss'

export default class MenuRight extends React.Component {
	constructor(props) {
		super(props);
	}
	handleClick(e) {
		e.stopPropagation();
		e.preventDefault();

		this.props.showCover();
	}
	render() {
		return (
			<li className='right-li'><img src={this.props.data.thumbUrl} onClick={this.handleClick.bind(this)} alt={this.props.data.thumbnail}/></li>
		);
	}
}