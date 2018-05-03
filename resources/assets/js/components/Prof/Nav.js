import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './../../../img/ku-logo.png';
import User from './../dropdown/User';
 
/* An example React component */
class Nav extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img src={logo} width="50" height="50" class="d-inline-block align-top"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="./main">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./history">History</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <User />
              </form>
            </div>
          </nav>
        );
    }
}
 
export default Nav;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('Nav')) {
    ReactDOM.render(<Nav />, document.getElementById('Nav'));
}