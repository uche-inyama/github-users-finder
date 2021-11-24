import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import githubContext from '../context/github/githubContext';

const Search = ({showClear, clearUsers, setAlert}) =>  {

  const Context =  useContext(githubContext)

  const [text, setText] = useState('');

  const handleChange = ({target: {value}}) => {
    setText(value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
      setAlert(`Please enter something, light`);
    } else {
      Context.searchUsers(text);
      setText('');
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='text' 
          placeholder='Search Users...' 
          value={text}
          onChange={handleChange}
        />
        <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
      </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>clear</button>
        )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search;