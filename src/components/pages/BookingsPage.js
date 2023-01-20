import React, { useReducer } from 'react';
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

const updateTimes = (dispatch) => (date) => {
	dispatch({ type: 'UPDATE_TIMES', payload: initializeTimes().times });
};

const Bookings = () => {
	const [state, dispatch] = useReducer(availableTimesReducer, initializeTimes());

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
          dispatch={dispatch}
          updateTimes={updateTimes(dispatch)}
				/>
			</div>
		</div>
	);
};

export default Bookings;
