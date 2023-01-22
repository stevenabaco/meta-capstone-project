import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Bookings from './components/pages/bookings/BookingsPage';
import ConfirmedBooking from './components/pages/confirmations/ConfirmedBooking';

function App() {
  return (
		<Router>
			<Layout>
				<Routes>
					<Route
						exact
						path='/reservations'
						element={<Bookings />}
					/>
					<Route
						exact
						path='/reservations/confirmation'
						element={<ConfirmedBooking />}
					/>
					<Route
						path='/'
						element={<Home />}
					/>
				</Routes>
			</Layout>
		</Router>
  );
}

export default App;
