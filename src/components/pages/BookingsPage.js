import React, { useReducer } from 'react';
import BookingsForm from '../widgets/bookings-widget/BookingsForm';
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

export const initializeTimes = () => {
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

export const updateTimes = (dispatch) => (date) => {
	dispatch({ type: 'UPDATE_TIMES', payload: initializeTimes().times });
};

const Bookings = () => {
  const initialState = initializeTimes();
	const [state, dispatch] = useReducer(availableTimesReducer, initialState);

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
				<BookingsForm
					state={state}
          dispatch={dispatch}
          updateTimes={updateTimes(dispatch)}
          initializeTimes={initializeTimes}
				/>
			</div>
		</div>
	);
};

export default Bookings;
