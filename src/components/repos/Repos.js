import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../context/github/githubContext';


const Repos = () => {
  const Context = useContext(GithubContext) 
  return Context.repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};


export default Repos;
