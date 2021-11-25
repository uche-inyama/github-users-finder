import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext'
import githubContext from '../context/github/githubContext';

const Search = () =>  {

  const Context =  useContext(githubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const handleChange = ({target: {value}}) => {
    setText(value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
      alertContext.setAlert('Please enter something', 'light');
      setTimeout(() => Context.getAlert(null), 5000);
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
        {Context.users.length > 0 && (
          <button className='btn btn-light btn-block' onClick={Context.clearUsers}>clear</button>
        )}
    </div>
  );
};


export default Search;