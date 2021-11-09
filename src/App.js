import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Loan from './components/pages/Loan';
import ContactUs from './components/pages/ContactUs';
import Register from './components/pages/Register';
import Transaction from './components/pages/Transaction';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/loan' component={Loan} />
        <Route path='/login' component={Login} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/register' component={Register} />
        <Route path='/transaction' component={Transaction} />
      </Switch>
    </Router>
  );
}

export default App;