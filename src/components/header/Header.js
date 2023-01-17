import React from 'react';
import HeaderNavigation from './header-navigation/HeaderNavigation';
import { ReactComponent as LemonLogo } from '../../svg/Logo .svg';
import styles from './header.module.scss';
import '../../styles/main.scss'

const Header = () => {
  return (
	  	<div className='container'>
		  <header className={`${styles['header']}`}>
			<LemonLogo />
			<HeaderNavigation />
		  </header>
	  	</div>
  );
}

export default Header;