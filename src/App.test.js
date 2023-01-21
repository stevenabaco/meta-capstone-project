
import { render, screen } from '@testing-library/react';
import Bookings, { initializeTimes, updateTimes } from './components/pages/BookingsPage';

test('renders the choose date label to say "Choose date"', () => {
  render(<Bookings />);
  const chatInputLabel = screen.getByText("Choose date");
  expect(chatInputLabel).toBeInTheDocument();
});

describe('initializeTimes', () => {
	it('should return the correct initial state', () => {
		const expectedState = {
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

		expect(initializeTimes()).toEqual(expectedState);
	});
});

describe('updateTimes', () => {
	it('should update the state with the provided times', () => {
		const mockDispatch = jest.fn();
		const mockDate = '2022-01-01';
		const expectedState = {
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

		updateTimes(mockDispatch)(mockDate);

		expect(mockDispatch).toHaveBeenCalledWith({
			type: 'UPDATE_TIMES',
			payload: expectedState.times,
		});
	});
});
