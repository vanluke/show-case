import React, { PureComponent, PropTypes } from 'react';
import { CounterContainer } from 'auth/counter';
import config from 'shared/config';
import Auth0Service from 'auth/service/auth0.service';
import AuthService from 'auth/service/auth.service';
import './_logout.scss';

class Logout extends PureComponent {
  static propTypes = {
    router: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(...props);
  }

  logout = () => {
    const { router } = this.props;
    Auth0Service.logout();
    AuthService.logout();
    router.push('/login');
  }

  render() {
    return (<div className="c-logout">
      <section className="c-logout__section">
        <h1 className="c-logout__header c-logout__header--main">You are logged out</h1>
      </section>
      <section className="c-logout__section">
        <CounterContainer
          text="You will be redirected in"
          suffix="s"
          actionAfter={this.logout}
          time={config.auth.logoutTime}
          timeInterval={config.auth.logoutTimeInterval}
        />
      </section>
    </div>);
  }
}

export default Logout;
