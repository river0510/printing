import React from 'react';
import '../styles/MenuBottom.scss';

export default class MenuBottom extends React.Component {
	render() {
		let figureClass = 'bottom-figure';
		if (this.props.state.isChosed) {
			figureClass += ' show';
		}
		return (
			<figure className={figureClass}>
				<img src={this.props.data.thumbUrl} alt={this.props.data.menuName}/>
				<figcaption>
					<p>{this.props.data.menuName}</p>
				</figcaption>
			</figure>
		)
	}
}