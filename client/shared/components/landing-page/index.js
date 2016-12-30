import React, { Component } from 'react';
import AuthService from 'auth/service';
import superagent from 'superagent';
import './_landing-page.scss';

export default class LandingPage extends Component {
  constructor(props) {
    super(...props);
  }

  state = {

  };

  componentWillMount() {
    const { sub } = AuthService.getSub();
    const token = AuthService.getToken();
    const url = `https://lgonciarz.eu.auth0.com/api/v2/users/${sub}`;
    superagent
    .get(url)
    .set('Authorization', `Bearer ${token}`)
    .end((error, response) => {
      if (error) {
        console.log(error);
      }
      this.setState(response.body);
    });
  }

  render() {
    return (<main>
      <header>
        <h1>{this.state.name}</h1>
        <h3>Break into the market</h3>
      </header>

      <a className="c-cta">Learn more &#10137;</a>
    </main>);
  }
}

// export default () => (<main>
//   <h1>Break into the market</h1>
//   <a className="c-cta">Learn more &#10137;</a>
// </main>);
