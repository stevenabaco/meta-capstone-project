
import { render, screen } from '@testing-library/react';
import Bookings, { initializeTimes, updateTimes } from './components/pages/bookings/BookingsPage';
import ConfirmedBooking from './components/pages/confirmations/ConfirmedBooking';
import { localStorage } from 'jest-localstorage-mock';
import App from './App';

test('Highlight title should be "This weeks specials!', () => {
  render(<App />);
  const highlightsTitle = screen.getByText("This weeks Specials!");
  expect(highlightsTitle).toBeInTheDocument();
});

describe('initializeTimes', () => {
	beforeEach(() => {
		// set up the local storage mock
		global.localStorage = localStorage;
	});

	it('should return the correct initial state', () => {
		// set some data in local storage
		global.localStorage.setItem('availableTimes', JSON.stringify(['9:00', '10:00']));
    const result = initializeTimes();
    expect(result).toBeTruthy();
    expect(Array.isArray(result.times)).toBe(true);
    expect(result.times.length).toBeGreaterThan(0);
	});
});


describe('updateTimes', () => {
	beforeEach(() => {
		global.localStorage = localStorage;
	});

	it('should update the date and available times', () => {
		const mockDispatch = jest.fn();
		const date = '2022-01-01';
		updateTimes(mockDispatch)(date);

		expect(mockDispatch).toHaveBeenCalledWith({
			type: 'UPDATE_DATE',
			payload: new Date(date),
		});
		expect(mockDispatch).toHaveBeenCalledWith({
			type: 'UPDATE_TIMES',
			payload: ['9:00', '10:00', '11:00'], // sample available times
		});
		expect(mockDispatch).toHaveBeenCalledTimes(2);
	});
});

