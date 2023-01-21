import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './hero-section.module.scss';

const HeroSection = () => {
    return (
			<section
				id='hero'
				className={`${styles['hero']}`}>
				<div className={`${styles['hero__block-container']}`}>
					<div className={`${styles['hero__inner-container']} `}>
						<div className={`${styles['hero__content-block']}`}>
							<h2 className={`${styles['hero__heading']}`}>Little Lemon</h2>
							<h3 className={`${styles['hero__sub-heading']}`}>Chicago</h3>
							<p className={`${styles['hero__content']}`}>
								We are a family owned Mediterranean restaurant, focused on
								traditional recipes served with a modern twist.
							</p>
							<NavLink to='/reservations'>
								<button className={`${styles['button']}`}>Reserve Table</button>
							</NavLink>
						</div>
						<div className={`${styles['hero__image-wrapper']}`}>
							<img
								src={require('../../../images/restauranfood.jpg')}
								alt='food on a platter'
							/>
						</div>
					</div>
				</div>
			</section>
	);
}

export default HeroSection;