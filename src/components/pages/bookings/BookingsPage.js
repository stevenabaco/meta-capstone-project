import React, { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingsForm from '../../widgets/bookings-widget/BookingsForm';
import styles from './bookings-page.module.scss';
import { fetchAPI } from '../../../api';

const availableTimesReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_TIMES':
			return {
				...state,
				times: action.payload,
			};
		case 'SELECT_TIME':
			return {
				...state,
				selectedTime: action.payload,
			};
		case 'UPDATE_DATE':
			const availableTimes = fetchAPI(action.payload);
			return {
				...state,
				date: action.payload,
				times: availableTimes,
			};
		default:
			return state;
	}
};

export const initializeTimes = () => {
	const today = new Date();
	const availableTimes = fetchAPI(today);
	const initialState = {
		times: availableTimes.map((time) => {
			return { value: time, label: time };
		}),
		selectedTime: { value: availableTimes[0], label: availableTimes[0] },
	};

	return initialState;
};

export const updateTimes = (dispatch) => (date) => {
	const dateObject = new Date(date);
	const availableTimes = fetchAPI(dateObject);
	dispatch({ type: 'UPDATE_DATE', payload: dateObject });
	dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
};

export const Bookings = () => {
	const initialState = initializeTimes();
	const [state, dispatch] = useReducer(availableTimesReducer, initialState);

	return (
		<Router>
			<div className={`${styles['bookings']}`}>
				<div className={`${styles['bookings__container']}`}>
					<div className={`${styles['bookings__image-wrapper']}`}>
						<img
							src={require('../../../images/restaurant.jpg')}
							alt='food on a platter'
						/>
					</div>
					<h2 className={`${styles['bookings__heading']}`}>Reserve a Table</h2>
					<p>
						Make a reservation and have you table prepared in time. Your can make
						anytime reservations as much as they are with our operating ours.
					</p>
					<BookingsForm
						state={state}
						dispatch={dispatch}
						updateTimes={updateTimes(dispatch)}
						initializeTimes={initializeTimes}
					/>
				</div>
			</div>
		</Router>
	);
};

export default Bookings;
