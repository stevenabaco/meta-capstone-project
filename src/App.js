import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' component={Home}/>
          <Route path='/' component={Home}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
