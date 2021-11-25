import React, { useEffect, Fragment, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GithubContext from '../context/github/githubContext';
import Spinner from '../layout/spinner';
import Repos from '../repos/Repos';

const User = ({getUser, loading, getUserRepos, repos}) => {
  let { login } = useParams();

  const Context = useContext(GithubContext);


  useEffect(() => {
    Context.getUser(login);
    Context.getUserRepos(login);
    // eslint-disable-next-line 
  },[])

  const { name, location, avatar_url, bio, 
    blog, followers, following, html_url,
    public_repos, public_gists, hireable, company
  } = Context.user;

  if (Context.loading) return <Spinner />

  return (
    <Fragment>
      <Link to='/'>Back To Search</Link>
      Hireable: {' '}
      {hireable ? (<i className="fas fa-check text-success"/>) :( <i className="fas fa-times-circle text-danger"/>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img 
            src={avatar_url}
            className='round-img'
            alt=""
            style={{ width: '150px'}}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
          <ul>
            <li>
              {login && <Fragment>
                <strong>Username: </strong>{login}
              </Fragment>}
            </li>

            <li>
              {company && <Fragment>
                <strong>Company: </strong>{company}
              </Fragment>}
            </li>

            <li>
              {blog && <Fragment>
                <strong>Blog: </strong>{blog}
              </Fragment>}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos 
        // repos={repos}
      />
    </Fragment>
  );
};

User.prototype = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }),
  getUserRepos: PropTypes.func.isRequired
}

export default User;