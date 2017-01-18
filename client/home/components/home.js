import React, { PureComponent } from 'react';
import UserService from 'dashboard/services';
import Navbar from 'nav-bar/components/nav-bar';
import 'home/components/_home.scss';

class Home extends PureComponent {
  constructor(props) {
    super(...props);
    this.userService = new UserService();
  }
  state = {
    user: {},
  };


  async componentWillMount() {
    const { body: user } = await this.userService.getUserDetails();
    this.setState({
      user,
    });
  }

  render() {
    return (<div className="c-home">
      <header className="c-home__header">
        <Navbar />
        <a className="c-home__header c-home__header--main">
          <h2 className="c-home__header c-home__header--inline">
            Welcome
          </h2>
          <span className="c-home__header c-home__header--inline">{this.state.user.name}</span>
        </a>
      </header>
      {this.props.children}
    </div>);
  }
}
//
// const Home = ({ children }) => {
//   return (<div className="c-home">
//     <header className="c-home__header">
//       <a className="c-home__header c-home__header--main">
//         <h2><b>Welcome</b><span></span></h2>
//       </a>
//     </header>
//     {children}
//   </div>);
// };
//
// Home.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]),
// };

export default Home;
