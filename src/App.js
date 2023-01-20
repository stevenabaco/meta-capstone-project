import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Bookings from './components/pages/BookingsPage';

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
						path='/'
						element={<Home />}
					/>
				</Routes>
			</Layout>
		</Router>
  );
}

export default App;
