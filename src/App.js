import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/users';
import axios from 'axios';
import './App.css';
import GithubState from './components/context/github/GithubState';
import Search from './components/users/search';
import Alert from './components/layout/Alert';
import About from './components/Pages/About';
import User from './components/users/user';


const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // const getUsers = async () => {
  //   setLoading(true);
  //   const res = await axios.get(`https://api.github.com/users?client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setUsers(res.data);
  //   setLoading(false);
  // };

  // useEffect(() => {
    // getUsers();
    // eslint-disable-next-line 
  // }, []);

  // const searchUsers = async (text) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };
  
  // const clearUsers = () => {
  //   setUsers([]);
  // };

  const getAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Search
              // searchUsers={searchUsers}
              // clearUsers={clearUsers}
              // showClear={users.length > 0 ? true : false }
              setAlert={getAlert}
              />
              <Routes>
                <Route exact path='/' element= {
                  <Users />
                }/>
                <Route exact path="/about" element={<About />} />
                <Route path="/user/:login" element={<User 
                  // loading={loading}
                  // getUser={getUser}
                  // user={user}
                  // getUserRepos={getUserRepos}
                  // repos={repos}
                  />
                }/>
              </Routes>
            </div>
          </div>
      </Router>
    </GithubState>
  );
};

export default App;
