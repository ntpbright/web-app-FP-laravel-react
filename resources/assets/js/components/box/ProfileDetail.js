import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
/* An example React component */
class ProfileDetail extends Component {
    render() {
        return (
          <div>
            <h1>Test</h1>
          </div>
        );
    }
}
 
export default Profile;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('ProfileDetail')) {
    ReactDOM.render(<ProfileDetail />, document.getElementById('ProfileDetail'));
}

