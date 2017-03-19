require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import MenuLeft from './MenuLeft.js';
import MenuRight from './MenuRight.js';

var menuDatas = require('../data/menuData.json');
var imgDatas = require('../data/imgData.json');
imgDatas = (function getUrl(imgArr) {
	for (let i = 0; i < imgArr.length; i++) {
		let value = imgArr[i];
		value.imgUrl = '../images/' + value.img;
		value.thumbUrl = '../images/' + value.thumbnail;
		imgArr[i] = value;
	}
	return imgArr;
})(imgDatas);

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuArr: [
				// {
				//  isChosed : false
				//	id :
				// }
			],
			thumbArr: [
				// {
				//  isChosed : false
				//  id :
				// }
			]
		}
	}
	menuChose(index) {
		return function() {
			let menuArr = this.state.menuArr;
			menuArr.forEach((value, i) => {
				if (i == index)
					value.isChosed = true;
				else
					value.isChosed = false;
			});
			this.setState({
				menuArr: menuArr
			})
		}.bind(this);
	}
	render() {
		var menuLeftList = [],
			menuRightList = [];
		menuDatas.forEach((value, index) => {
			if (!this.state.menuArr[index]) {
				this.state.menuArr[index] = {
					isChosed: false
				}
			}
			menuLeftList.push(
				<MenuLeft
					data={value}
					state={this.state.menuArr[index]}
					key={index}
					chose={this.menuChose(index)}
				/>
			);
			if (this.state.menuArr[index].isChosed) {
				imgDatas.forEach((v, i) => {
					if (v.menuId == value.id) {
						menuRightList.push(
							<MenuRight
								data={v}
								key={i}
							/>
						);
					}
				})
			}
		});
		return (
			<div className='stage'>
				<div className='stageImg'>
					<img className='img' src="../images/底图.png" alt="stage"/>
					<div className='menu-side menu-left'>
						<ul>
        				{menuLeftList}
        				</ul>
      				</div>
      				<div className='menu-side menu-right'>
        				{menuRightList}
      				</div>
				</div>
				<div className='menu-bottom'>
					<p>已选项目</p>
				</div>
      		</div>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;