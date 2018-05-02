import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './../../../img/ku-logo.png';
import User from './../dropdown/User';
 
/* An example React component */
class NavChoice extends Component {
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
                  <a class="nav-link" href="./main">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Requesting
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="./r-SL">Sick leave</a>
                    <a class="dropdown-item" href="./r-VL">Vacation leave</a>
                    <a class="dropdown-item" href="./r-PEL">Personal errand leave</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./history">History</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./course">Course</a>
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
 
export default NavChoice;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('NavChoice')) {
    ReactDOM.render(<NavChoice />, document.getElementById('NavChoice'));
}