import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/alertState';
import Alert from './components/layout/Alert';
import About from './components/Pages/About';
import User from './components/users/user';
import Home from './components/Pages/home';
import NotFound from './components/Pages/NotFound';

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
                  <Route path="/user/:login" element={<User />}/>
                  <Route element={<NotFound />} />
                </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
