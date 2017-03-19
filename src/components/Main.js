require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import MenuLeft from './MenuLeft.js';
import MenuRight from './MenuRight.js';
import Img from './Img.js';


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
			],
			imgArr: [
				// {
				// 	isChosed : false
				//  height : 0
				//  width : 0
				//  menuId :
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
	showCover(menuId, index) {
		return function() {
			let imgArr = this.state.imgArr;
			imgArr.forEach((value, i) => {
				if (menuId == value.menuId) {
					if (index == i) {
						let isChosed = imgArr[i].isChosed ? false : true;
						imgArr[i] = {
							isChosed: isChosed,
							menuId: menuId
						}
					} else {
						imgArr[i] = {
							isChosed: false,
							menuId: menuId
						}
					}
				}
			});
			this.setState({
				imgArr: imgArr
			});
		}.bind(this);
	}
	render() {
		let menuLeftList = [],
			menuRightList = [],
			imgs = [];

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
								showCover={this.showCover(v.menuId,i)}
							/>
						);
					}
				})
			}
		});
		imgDatas.forEach((value, index) => {
			if (!this.state.imgArr[index]) {
				this.state.imgArr[index] = {
					isChosed: false,
					menuId: value.menuId
				}
			}
			imgs.push(
				<Img
					data={value}
					state={this.state.imgArr[index]}
					key={index}
				/>
			)
		});
		return (
			<div className='stage'>
				<div className='stageImg'>					
					<img className='main-img' ref="mainImg" src="../images/底图.png" alt="stage"/>
					{imgs}
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