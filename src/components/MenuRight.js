import React from 'react'
import '../styles/MenuRight.scss'

export default class MenuRight extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li className='right-li'><img src={this.props.data.thumbUrl} alt={this.props.data.thumbnail}/></li>
		);
	}
}