import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header-navigation.module.scss';

const HeaderNavigation = () => {
  return (
		<nav className={`${styles['nav']}`}>
			<menu className={`${styles['nav__list']}`}>
				<li className={`${styles['nav__list-item']}`}><NavLink exact to="/">Home</NavLink></li>
				<li className={`${styles['nav__list-item']}`}><NavLink to="/about">About</NavLink></li>
				<li className={`${styles['nav__list-item']}`}><NavLink to="/menu">Menu</NavLink></li>
				<li className={`${styles['nav__list-item']}`}><NavLink to="/reservations">Reservations</NavLink></li>
				<li className={`${styles['nav__list-item']}`}><NavLink to="/orderOnline">Order online</NavLink></li>
				<li className={`${styles['nav__list-item']}`}><NavLink to="/login">Login</NavLink></li>
			</menu>
		</nav>
  );
}

export default HeaderNavigation;