import React from 'react';
import '../styles/MenuBottom.scss';

export default class MenuBottom extends React.Component {
	render() {
		return (
			<div className='menu-bottom'>
			<ul>
				<h2>已选方案</h2>
				<li>
					<figure>
						<img src="../images/printing1.png" alt=""/>
						<figcaption>
							<p>沙发SOFA</p>
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<img src="../images/printing2.png" alt=""/>
						<figcaption>
							<p>墙纸WALL</p>
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<img src="../images/printing3.jpg" alt=""/>
						<figcaption>
							<p>抱枕PILLOW</p>
						</figcaption>
					</figure>
				</li>
			</ul>
			</div>
		)
	}
}