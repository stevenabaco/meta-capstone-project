import React, { useState} from 'react';
import Select from 'react-select';
import styles from './bookings-widget.module.scss';

const formStyles = {
	display: 'grid',
	maxWidth: '200px',
	gap: '20px',
};

const BookingsWidget = ({state, dispatch, updateTimes }) => {
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState('Birthday');
    const [selectedTime, setSelectedTime] = useState(state.selectedTime);
    const [selectedOccasion, setSelectedOccasion] = useState({ value: occasion, label: occasion });
    const timeOptions = state.times;
    const occasionOptions = [
		{ value: 'Birthday', label: 'Birthday' },
		{ value: 'Anniversary', label: 'Anniversary' },
    ];

    const handleSubmit = (event) => {
		event.preventDefault();
		// For the future if we connect another page we can pass the form data (date, time, guests, occasion) to the next page
		// we can use the `useHistory` hook from `react-router-dom` to navigate to the next page
		// and pass the form data as props to the next page component
		// for now we can just console log the data to make sure it's pulling the information
		console.log('Your reservation has been completed!');
		console.log('Date:', date);
		console.log('Time:', state.selectedTime);
		console.log('Guests:', guests);
		console.log('Occasion:', occasion);
	};

    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatch({type: 'UPDATE_TIMES', payload: event.target.value});
        updateTimes(event.target.value);
    };

    const handleTimeChange = (selectedOption) => {
		dispatch({ type: 'SELECT_TIME', payload: selectedOption });
        setSelectedTime(selectedOption);
    };

    const handleOccasionChange = (selectedOption) => {
        setSelectedOccasion(selectedOption);
    }

	return (
		<>
			<form
				style={formStyles}
				onSubmit={handleSubmit}>
				<label htmlFor='res-date'>Choose date</label>
				<input
					type='date'
					id='res-date'
					value={date}
					onChange={handleDateChange}
				/>
				<label htmlFor='res-time'>Choose time</label>
				<Select
					id='res-time'
					options={timeOptions}
					value={selectedTime}
					onChange={handleTimeChange}
				/>
				<label htmlFor='guests'>Number of guests</label>
				<input
					type='number'
					placeholder='1'
					min='1'
					max='10'
					id='guests'
					value={guests}
					onChange={(e) => setGuests(e.target.value)}
				/>
				<label htmlFor='occasion'>Occasion</label>
				<Select
					id='res-occasion'
					options={occasionOptions}
					value={selectedOccasion}
					onChange={handleOccasionChange}
				/>
				<input
					type='submit'
					value='Make Your reservation'
					className={`${styles['button']}`}
				/>
			</form>
		</>
	);
};

export default BookingsWidget;
