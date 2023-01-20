import React, { useState } from 'react';
import Select from 'react-select';
import styles from './bookings-widget.module.scss';

const formStyles = {
	display: 'grid',
	maxWidth: '200px',
	gap: '20px',
};

const BookingsWidget = (props) => {
    const { availableTimes, setAvailableTimes } = props;
    const [selectedTime, setSelectedTime] = useState({ value: availableTimes[0].value, label: availableTimes[0].label });
    const [date, setDate] = useState('');
	const [time, setTime] = useState('17:00');
	const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');
    const [selectedOccasion, setSelectedOccasion] = useState({ value: occasion, label: occasion });

    const occasionOptions = [
        {
            value: 'Birthday',
            label: 'Birthday'
        },
        {
            value: 'Anniversary',
            label: 'Anniversary'
        }
        ]

    const handleSubmit = (event) => {
		event.preventDefault();
		// For the future if we connect another page we can pass the form data (date, time, guests, occasion) to the next page
		// we can use the `useHistory` hook from `react-router-dom` to navigate to the next page
		// and pass the form data as props to the next page component
        // for now we can just console log the data to make sure it's pulling the information
        console.log("Your reservation has been completed!")
        console.log('Date:', date);
		console.log('Time:', time);
		console.log('Guests:', guests);
		console.log('Occasion:', occasion);
    }
    
    const handleAvailableTimeChange = (selectedOption) => {
        setSelectedTime(selectedOption);
        setTime(selectedOption);
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
					onChange={(e) => setDate(e.target.value)}
				/>
				<label htmlFor='res-time'>Choose time</label>
				<Select
					id='res-time '
					value={selectedTime}
                    onChange={handleAvailableTimeChange}
					options={availableTimes}
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
					id='occasion'
					value={selectedOccasion}
					onChange={(selectedOccasion) => {
                        setSelectedOccasion(selectedOccasion);
                        setOccasion(selectedOccasion);
					}}
					options={occasionOptions}/>
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
