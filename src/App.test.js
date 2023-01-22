
import { render, screen } from '@testing-library/react';
import Bookings, { initializeTimes, updateTimes } from './components/pages/bookings/BookingsPage';
import { localStorage } from 'jest-localstorage-mock';

test('renders the choose date label to say "Choose date"', () => {
  render(<Bookings />);
  const chatInputLabel = screen.getByText("Choose date");
  expect(chatInputLabel).toBeInTheDocument();
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

// describe('initializeTimes', () => {
// 	it('should return the correct initial state', () => {
// 		const expectedState = {
// 			times: [
// 				{ value: '17:00', label: '17:00' },
// 				{ value: '18:00', label: '18:00' },
// 				{ value: '19:00', label: '19:00' },
// 				{ value: '20:00', label: '20:00' },
// 				{ value: '21:00', label: '21:00' },
// 				{ value: '22:00', label: '22:00' },
// 			],
// 			selectedTime: { value: '17:00', label: '17:00' },
// 		};

// 		expect(initializeTimes()).toEqual(expectedState);
// 	});
// });

// describe('updateTimes', () => {
// 	it('should update the state with the provided times', () => {
// 		const mockDispatch = jest.fn();
// 		const mockDate = '2022-01-01';
// 		const expectedState = {
// 			times: [
// 				{ value: '17:00', label: '17:00' },
// 				{ value: '18:00', label: '18:00' },
// 				{ value: '19:00', label: '19:00' },
// 				{ value: '20:00', label: '20:00' },
// 				{ value: '21:00', label: '21:00' },
// 				{ value: '22:00', label: '22:00' },
// 			],
// 			selectedTime: { value: '17:00', label: '17:00' },
// 		};

// 		updateTimes(mockDispatch)(mockDate);

// 		expect(mockDispatch).toHaveBeenCalledWith({
// 			type: 'UPDATE_TIMES',
// 			payload: expectedState.times,
// 		});
// 	});
// });
