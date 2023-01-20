import React from 'react';
import BookingsWidget from '../widgets/bookings-widget/BookingsWidget';

import styles from './bookings-page.module.scss';

const Bookings = () => {
	return (
		<div className={`${styles['bookings']}`}>
			<div className={`${styles['bookings__container']}`}>
				<div className={`${styles['bookings__image-wrapper']}`}>
					<img
						src={require('../../images/restaurant.jpg')}
						alt='food on a platter'
					/>
				</div>
        <h2 className={`${styles['bookings__heading']}`}>Reserve a Table</h2>
				<p>
					Make a reservation and have you table prepared in time. Your can make anytime
					reservations as much as they are with our operating ours.
				</p>
				<BookingsWidget />
			</div>
		</div>
	);
};

export default Bookings;
