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
    const { user } = this.state;
    return (<div>XX{user.email}</div>);
  }
}
