import React, {useState} from 'react';
import BookingsWidget from '../widgets/bookings-widget/BookingsWidget';

import styles from './bookings-page.module.scss';

const Bookings = () => {

  const [availableTimes, setAvailableTimes] = useState([
		{ value: '17:00', label: '17:00' },
		{ value: '18:00', label: '18:00' },
		{ value: '19:00', label: '19:00' },
		{ value: '20:00', label: '20:00' },
		{ value: '21:00', label: '21:00' },
		{ value: '22:00', label: '22:00' },
  ]);
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
        <BookingsWidget availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
			</div>
		</div>
	);
};

export default Bookings;
