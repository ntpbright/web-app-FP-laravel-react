import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
/* An example React component */
class User extends Component {
    render() {
        return (
          <div class="dropdown">
            <button class="btn btn-outline-info border-none-b dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Username
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="./profile"><i class="far fa-user-circle"></i> Profile</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" id="logout" href="../"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>
          </div>
        );
    }
}
 
export default User;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('User')) {
    ReactDOM.render(<User />, document.getElementById('User'));
}