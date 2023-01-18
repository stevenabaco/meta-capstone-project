import React from 'react';
import '../../css/main.css';

const BurgerIcon = props => {

	return (
		<div
			className={props.extended ? 'menu-btn open' : 'menu-btn'}>
			<div className='menu-btn__burger'></div>
		</div>
	);
};

export default BurgerIcon;
