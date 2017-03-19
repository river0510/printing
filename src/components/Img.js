import React from 'react';
import '../styles/Img.scss';

export default class Img extends React.Component {
	render() {
		let imgClass = 'main-img cover-img';
		if (this.props.state.isChosed) {
			imgClass += ' show';
		}
		return (
			<img className={imgClass} src={this.props.data.imgUrl} alt={this.props.data.img}/>
		)
	}
}