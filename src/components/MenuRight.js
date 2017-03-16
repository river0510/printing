import React from 'react'
import '../styles/MenuRight.scss'

export default class MenuRight extends React.Component {
	constructor(props) {
		super(props);
	}
	showPillow(e) {
		this.props.showPillow();
		e.preventDefault();
		e.stopPropagation();
	}
	showBg(e) {
		this.props.showBg();
		e.preventDefault();
		e.stopPropagation();
	}
	render() {
		return (
			<div className="menu-right">
        		<li><img src="../images/printing1.png" onClick={this.showPillow.bind(this)} alt="printing1"/></li>
        		<li><img src="../images/printing2.png" onClick={this.showPillow.bind(this)} alt="printing2"/></li>
        		<li><img src="../images/printing3.jpg" onClick={this.showBg.bind(this)} alt="printing3"/></li>
        		<li><img src="../images/printing4.png" onClick={this.showBg.bind(this)} alt="printing4"/></li>
        		<li><img src="../images/printing5.png" onClick={this.showBg.bind(this)} alt="printing5"/></li>
      		</div>
		);
	}
}