import React, { Component } from 'react';
import UserService from 'dashboard/services';

export default class UserPanel extends Component {
  constructor(props) {
    super(...props);
    this.userService = new UserService();
  }

  state = {
    user: {},
  };

  async componentDidMount() {
    const { body } = await this.userService.getUserDetails();
    this.setState({
      user: body,
    });
  }

  render() {
    // const { user } = this.state;
    return (<div>
      This is dashboard
      {/* <header>
        <h1>Welcome {user.nickname}</h1>
      </header>
      <picture>
        <img src={user.picture} alt="avatar" />
      </picture>
      <ul>
        <li>Last update: {user.updated_at}</li>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Is verified: {!!user.email_verified}</li>
        <li>Created at: {user.created_at}</li>
      </ul> */}
    </div>);
  }
}
