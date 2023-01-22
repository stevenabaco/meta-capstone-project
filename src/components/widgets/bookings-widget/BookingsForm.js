import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import styles from './bookings-form.module.scss';
import { submitAPI } from '../../../api';

const formStyles = {
	display: 'grid',
	maxWidth: '200px',
	gap: '20px',
};

const BookingsForm = ({ state, dispatch, updateTimes}) => {
	const navigate = useNavigate();
	const [date, setDate] = useState(new Date());
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState('');
	const [selectedTime, setSelectedTime] = useState(state.selectedTime);
	const [selectedOccasion, setSelectedOccasion] = useState(state.selectedOccasion);
	const timeOptions = state.times.map((time) => {
		return { value: time, label: time };
	});
	const occasionOptions = [
		{ value: 'Birthday', label: 'Birthday' },
		{ value: 'Anniversary', label: 'Anniversary' },
	];

	const handleDateChange = (date) => {
		setDate(date);
		updateTimes(date);
	};

	const handleTimeChange = (selectedOption) => {
		setSelectedTime(selectedOption);
		dispatch({ type: 'SELECT_TIME', payload: selectedOption });
	};

	const handleOccasionChange = (selectedOption) => {
		setSelectedOccasion(selectedOption);
		setOccasion(selectedOption);
	};

	const handleGuestsChange = (e) => {
		setGuests(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
		const data = { date, guests, occasion, selectedTime };
		console.log(data)
		submitAPI(data);
		navigate('/reservations/confirmation', { state: data });
	};

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
					onChange={(e) => handleDateChange(e.target.value)}
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
					onChange={handleGuestsChange}
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
					value='Make a reservation'
					className={`${styles['button']}`}
				/>
			</form>
		</>
	);
};

export default BookingsForm;
