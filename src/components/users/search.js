import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
 
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === '') {
      this.props.setAlert(`Please enter something, light`);
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: ''});
    }
  }

  render(){
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            name='text' 
            placeholder='Search Users...' 
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
              type='submit'
              value='Search'
              className='btn btn-dark btn-block'
            />
        </form>
          {showClear && 
            <button onClick={clearUsers}>clear</button>
          }
      </div>
    )
  }
}

export default Search;