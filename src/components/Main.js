require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import MenuLeft from './MenuLeft.js';
import MenuRight from './MenuRight.js';
import MenuBottom from './MenuBottom.js';
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
			imgArr: [
				// {
				// 	isChosed : false
				//  height : 0
				//  width : 0
				//  menuId :
				// }
			],
			showStart: true,
			showMenu: true,
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

	showStart = (e) => {
		e.preventDefault();
		this.setState({
			showStart: false
		})
	}

	showMenu = (e) => {
		e.preventDefault();
		let showMenu = this.state.showMenu ? false : true;
		this.setState({
			showMenu: showMenu
		})
	}
	render() {
		let menuLeftList = [],
			menuRightList = [],
			menuBottomList = [],
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
			if (this.state.imgArr[index].isChosed) {
				menuBottomList.push(
					<MenuBottom
						data={value}
						state={this.state.imgArr[index]}
						key={index}
					/>
				)
			}

		});

		let startClass = this.state.showStart ? 'start' : 'start start-disappear',
			wrapperClass = this.state.showStart ? 'wrapper' : 'wrapper wrapper-disappear',
			menuLeftClass = this.state.showMenu ? 'menu-side menu-left show-menu' : 'menu-side menu-left hide-menu',
			menuRightClass = this.state.showMenu ? 'menu-side menu-right show-menu' : 'menu-side menu-right hide-menu',
			hideTitle = this.state.showMenu ? '隐藏菜单' : '显示菜单';

		return (
			<div>
				<div className={wrapperClass}>
				</div>
				<div className='stage'>
					<a className="hide-btn" onClick={this.showMenu}>{hideTitle}</a>
					<div className='stageImg clearfloat'>
						<img className='main-img' ref="mainImg" src="../images/底图.png" alt="stage"/>
						{imgs}
						<div className={menuLeftClass}>
							<ul>
	        				{menuLeftList}
	        				</ul>
	      				</div>
	      				<div className={menuRightClass}>
	        				{menuRightList}
	      				</div>
					</div>
					<div className='menu-bottom'>
						<p className='bottom-title'>已选项目</p>
						{menuBottomList}
					</div>
	      		</div>      		
	     		<div className={startClass}>
	     			<p className="start-title">THE ROOM</p>
					<a className="start-btn" onClick={this.showStart}>START</a>	     			
	     		</div>
      		</div>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;