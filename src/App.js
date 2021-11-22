import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/users';
import axios from 'axios';
import './App.css';
import Search from './components/users/search';
import Alert from './components/layout/Alert';
import About from './components/Pages/About';
import User from './components/users/user';


class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  async componentDidMount(){
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data, loading: false});
  };

  searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false});
  };
  
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: { 
        msg,
        type
      }
    });
    setTimeout(() => this.setState({ alert: null}), 5000);
  };

  getUser = async (username) => {
    this.setState({loading: true});

    const res = await axios.get(
      `https://api.githu.com/users?q=${username}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID}&client_service=${
      process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({user: res.data, loading: false});
  };

  render() {
    const {loading, users, user} = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Search
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={users.length > 0 ? true : false }
              setAlert={this.setAlert}
              />
              <Routes>
                <Route exact path='/' element= {
                  <Users loading={loading} users={users} />
                }/>
                <Route exact path="/about" element={<About />} />
                <Route path="/user/:login" element={<User getUser={this.getUser} user={user}/>} />
              </Routes>
            </div>
        </Router>
      </div>
    );
  };
};

export default App;
