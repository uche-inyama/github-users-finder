import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, SET_LOADING, SET_ALERT, CLEAR_USERS, GET_REPOS, GET_USER } from '../types';

const GithubState = props => 
   const initialState = {
	users: [],
	user: {},
	repos: [],
	alert: {},
	loading: false
    }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
        
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

 const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
   `https://api.github.com/users/${username}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
      process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
       type: GET_USER,
       payload: res.data
     });
  };
 
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  };

const getAlert = (msg, type) => {
   dispatch({
      type: SET_ALERT,
      payload: { msg, type }
   });
    // setAlert({msg, type});
    // setTimeout(() => setAlert(null), 5000);
  };
  
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({type: SET_LOADING});
     return <GithubContext.Provider 
	value={{
		users: state.users,
		user: state.user,
		repos: state.repos,
		loading: state.loading,
		searchUsers,
		clearUsers,
		getUser,
		getUserRepos,
		getAlert
	     }}
          >
	  {props.children}
	</GithubContext.Provider>
}

export default GithubState;
