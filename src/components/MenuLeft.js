import React from 'react';

import '../styles/MenuLeft.scss';

export default class Menu extends React.Component {
	render() {
		return (
			<div className="menu-left">
        			<li><a href="">沙发SOFA</a></li>
        			<li><a href="">墙纸WALL</a></li>
        			<li><a href="">抱枕PILLOW</a></li>
        			<li><a href="">灯罩LAMPSHADE</a></li>
      		</div>
		);
	}
}