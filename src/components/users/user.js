import React, { Component } from 'react';

export class User extends Component {
	componentDidMount(){
		console.log(this.props.match)
		// this.props.getUser(this.props.match.login);
	}
	render(){
		return <div>user</div>
	}
}
export default User;