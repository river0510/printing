require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import MenuLeft from './MenuLeft.js'
import MenuRight from './MenuRight.js'
import MenuBottom from './MenuBottom.js'

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// pillow: {
			// 	show: false
			// },
			// bg: {
			// 	show: false
			// }
		}
	}
	showPillow() {
		return function() {
			let pillow = this.state.pillow;
			pillow.show = !pillow.show;
			this.setState({
				pillow: pillow
			})
		}.bind(this);
	}
	showBg() {
		return function() {
			let bg = this.state.bg;
			bg.show = !bg.show;
			this.setState({
				bg: bg
			})
		}.bind(this);
	}
	render() {
		if (!this.state.pillow || !this.state.bg) {
			this.state = {
				pillow: {
					show: false
				},
				bg: {
					show: false
				}
			}
		}
		let pillowClass = 'pillow-1 stageImg',
			bgClass = 'bg-1 stageImg';
		pillowClass += this.state.pillow.show ? ' show' : '';
		bgClass += this.state.bg.show ? ' show' : '';

		return (
			<div className='stage'>
				<MenuLeft />
				<MenuRight showPillow={this.showPillow()} showBg={this.showBg()}/>
				<MenuBottom />
      			<img className='main stageImg'  src="../images/main.jpg" alt="stage"/>
      			<img className={pillowClass} src="../images/pillow-1.png" alt="pillow-1"/>
				<img className={bgClass}  src="../images/bg-1.png" alt="bg-1"/>
      		</div>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;