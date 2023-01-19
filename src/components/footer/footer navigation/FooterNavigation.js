import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './footer-navigation.module.scss';

const FooterNavigation = () => {
	return (
		<div className={`${classes['nav-menu']}`}>
			<menu className={`${classes['nav-menu__list']}`}>
				<li className={`${classes['nav-menu__list-item']}`}>
					<span className={`${classes['nav-menu__list-item-title']}`}>
						Doormat Navigation
					</span>
					<menu
						className={`${classes['nav-menu__inner-list']} ${classes['nav-menu__list-item--inner']}`}>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<NavLink to='/menu'>Menu</NavLink>
						</li>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<NavLink to='/reservations'>Reservations</NavLink>
						</li>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<NavLink to='/order-online'>Order Online</NavLink>
						</li>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<NavLink to='/login'>Login</NavLink>
						</li>
					</menu>
				</li>
			</menu>
			<menu className={`${classes['nav-menu__list']}`}>
				<li className={`${classes['nav-menu__list-item']}`}>
					<span className={`${classes['nav-menu__list-item-title']}`}>Contact</span>
					<menu
						className={`${classes['nav-menu__inner-list']} ${classes['nav-menu__list-item--inner']}`}>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<p>Little Lemon Restaurant</p>
							<p>123 Main St,</p>
							<p>Chicago, IL 60601</p>
						</li>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<span>(312) 123 - 9876 </span>
						</li>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<span>managment@littlelemon.com</span>
						</li>
					</menu>
				</li>
			</menu>
			<menu className={`${classes['nav-menu__list']}`}>
				<li className={`${classes['nav-menu__list-item']}`}>
					<span className={`${classes['nav-menu__list-item-title']}`}>
						Social Media Link
					</span>
					<menu
						className={`${classes['nav-menu__inner-list']} ${classes['nav-menu__list-item--inner']}`}>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<span>Facebook</span>
						</li>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<span>Yelp</span>
						</li>
						<li
							className={`${classes['nav-menu__list-item']} ${classes['nav-menu__list-item--inner']}`}>
							<span>LinkedIn</span>
						</li>
					</menu>
				</li>
			</menu>
		</div>
	);
};

export default FooterNavigation;
