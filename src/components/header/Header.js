import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LemonLogo } from '../../svg/Logo .svg';
import styles from './header.module.scss';
import { AiOutlineMenu, AiOutlineLine } from 'react-icons/ai';
import '../../styles/main.scss'

const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

  return (
		<div className='container'>
			<header className={`${styles['header']}`}>
				<NavLink
					to='/'
					exact
					onClick={closeMobileMenu}>
					<LemonLogo />
				</NavLink>

				<nav className={`${styles['nav']}`}>
					<div
						className={`${styles['menu-icon']}`}
						onClick={handleClick}>
						{click ? <AiOutlineLine /> : <AiOutlineMenu />}
					</div>
					<menu className={`${click ? `${styles['nav__menu']} ${styles['active']}` : styles['nav__menu']}`}>
						<li className={`${styles['nav__list-item']}`}>
							<NavLink
								exact
								to='/'>
								Home
							</NavLink>
						</li>
						<li className={`${styles['nav__list-item']}`}>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li className={`${styles['nav__list-item']}`}>
							<NavLink to='/menu'>Menu</NavLink>
						</li>
						<li className={`${styles['nav__list-item']}`}>
							<NavLink to='/reservations'>Reservations</NavLink>
						</li>
						<li className={`${styles['nav__list-item']}`}>
							<NavLink to='/orderOnline'>Order online</NavLink>
						</li>
						<li className={`${styles['nav__list-item']}`}>
							<NavLink to='/login'>Login</NavLink>
						</li>
					</menu>
				</nav>
			</header>
		</div>
  );
}

export default Header;