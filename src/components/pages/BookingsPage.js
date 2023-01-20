import React, { useState, useReducer } from 'react';
import BookingsWidget from '../widgets/bookings-widget/BookingsWidget';
import styles from './bookings-page.module.scss';

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
    default:
      return state;
  }
};
const initializeTimes = () => {
  const initialState = {
    times: [
      { value: '17:00', label: '17:00' },
      { value: '18:00', label: '18:00' },
      { value: '19:00', label: '19:00' },
      { value: '20:00', label: '20:00' },
      { value: '21:00', label: '21:00' },
      { value: '22:00', label: '22:00' },
    ],
	  selectedTime: { value: '17:00', label: '17:00' },
  };
  return initialState;
}

	//need to pass the dispatch function as a prop to the BookingsWidget component and use it inside the updateTimes function
const updateTimes = (dispatch) => (date) => {
	// The function will change the available times based on the selected date
	// For now, the function can return the same available times regardless of the date
	dispatch({ type: 'UPDATE_TIMES', payload: initializeTimes().times });
};
const Bookings = () => {
	const [state, dispatch] = useReducer(availableTimesReducer, initializeTimes());
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
				<BookingsWidget
					state={state}
					updateTimes={updateTimes(dispatch)}
				/>
			</div>
		</div>
	);
};

export default Bookings;
