import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import styles from './bookings-form.module.scss';
import { submitAPI } from '../../../api';
import * as Yup from 'yup';

const formStyles = {
	display: 'grid',
	maxWidth: '200px',
	gap: '20px',
};

const validationSchema = Yup.object().shape({
	date: Yup.date().required('Please select a date'),
	guests: Yup.number()
		.required('Please enter number of guests')
		.min(2, 'There must be at least two people to reserve a table')
		.max(10, "Sorry, we can't seat more than 10 people a table"),
	occasion: Yup.string().required('Please select an occasion'),
	selectedTime: Yup.object().required('Please select a time'),

});
const BookingsForm = ({ state, dispatch, updateTimes}) => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState({})
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1;
	const day = currentDate.getDate();
	const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
		.toString()
		.padStart(2, '0')}`;
	const [date, setDate] = useState(formattedDate);
	const [guests, setGuests] = useState(0);
	const [occasion, setOccasion] = useState('');
	const [selectedTime, setSelectedTime] = useState(state.selectedTime[0]);
	const [selectedOccasion, setSelectedOccasion] = useState(state.selectedOccasion);
	const timeOptions = state.times.map((time) => {
		return { value: time, label: time };
	});
	const occasionOptions = [
		{ value: 'Birthday', label: 'Birthday' },
		{ value: 'Anniversary', label: 'Anniversary' },
	];

	const handleDateChange = (e) => {
		const currentDate = new Date(e.target.value);
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth() + 1;
		const day = currentDate.getDate();
		const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
			.toString()
			.padStart(2, '0')}`;
		setDate(formattedDate);
		updateTimes(formattedDate);
	};

	const handleTimeChange = (selectedOption) => {
		setSelectedTime(selectedOption);
		dispatch({ type: 'SELECT_TIME', payload: selectedOption});
	};

	const handleOccasionChange = (selectedOption) => {
		setSelectedOccasion(selectedOption);
		setOccasion(selectedOption.label);
	};

	const handleGuestsChange = (e) => {
		setGuests(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
		const data = { date, guests, occasion, selectedTime };
		console.log(data);
		validationSchema.validate(data, { abortEarly: false }).then(() => {
			submitAPI(data);
			navigate('/reservations/confirmation', { state: data });
		}).catch((errors) => {
			 const errorMap = {};
				errors.inner.forEach((error) => {
					errorMap[error.path] = error.message;
				});
				setErrors(errorMap);
		})

	};

	useEffect(() => {
		updateTimes(date)
	}, [])

	return (
		<>
			<form
				style={formStyles}
				onSubmit={handleSubmit}>
				<label htmlFor='date'>Choose date</label>
				<input
					id="date"
					type='date'
					name='date'
					value={date}
					onChange={handleDateChange}
				/>
				{errors.date && (
					<div className={`${styles['form-error']}`}>{errors.date}</div>
				)}
				<label htmlFor='time'>Choose time</label>
				<Select
					id="time"
					name='selectedTime'
					options={timeOptions}
					value={timeOptions.label}
					onChange={handleTimeChange}
				/>
				{errors.selectedTime && (
					<div className={`${styles['form-error']}`}>{errors.selectedTime}</div>
				)}
				<label htmlFor='guests'>Number of guests</label>
				<input
					id="guests"
					type='number'
					name='guests'
					value={guests}
					onChange={handleGuestsChange}
				/>
				{errors.guests && <div className={`${styles['form-error']}`}>{errors.guests}</div>}
				<label htmlFor='occasion'>Occasion</label>
				<Select
					id="occasion"
					name='occasion'
					options={occasionOptions}
					value={selectedOccasion}
					onChange={handleOccasionChange}
				/>
				{errors.occasion && (
					<div className={`${styles['form-error']}`}>{errors.occasion}</div>
				)}
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
