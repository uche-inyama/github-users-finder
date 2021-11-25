import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/users';
// import axios from 'axios';
import './App.css';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/alertState';
import Search from './components/users/search';
import Alert from './components/layout/Alert';
import About from './components/Pages/About';
import User from './components/users/user';
import Home from './components/Pages/home';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className='container'>
              <Alert />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route path="/user/:login" element={<User />
                 }/>
                </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
