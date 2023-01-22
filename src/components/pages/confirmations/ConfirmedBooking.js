import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './confirmed-booking.module.scss';

const ConfirmedBooking = () => {
	const location = useLocation();
	const state = location.state;
	console.log(state);

    return (
		<div className={`${styles['confirmation']}`}>
			<div className={`${styles['confirmation__container-block']}`}>
				<h1 className={`${styles['confirmation__title']}`}>
					Your table reservation has been confirmed!
				</h1>
				<h2 className={`${styles['confirmation__subtitle']}`}>
					We hope you enjoy your <span>{state.occasion.value}</span>
				</h2>
				<div className={`${styles['confirmation-content__container-block']}`}>
					<p className={`${styles['confirmation__text']}`}>
						Date:{' '}
						<span>{state.date}</span>
					</p>
					<p className={`${styles['confirmation__text']}`}>
						Time:{' '}
						<span>{state.selectedTime.value}</span>
					</p>
					<p className={`${styles['confirmation__text']}`}>
						Guests:{' '}
						<span>{state.guests}</span>
					</p>
				</div>
			</div>
		</div>
	);       
}

export default ConfirmedBooking