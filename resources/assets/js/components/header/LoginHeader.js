import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
/* An example React component */
class LoginHeader extends Component {
    render() {
        return (
          <div class="text-center text-header-login">
            <h1>Leave System</h1>
          </div>
        );
    }
}
 
export default LoginHeader;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('LoginHeader')) {
    ReactDOM.render(<LoginHeader />, document.getElementById('LoginHeader'));
}