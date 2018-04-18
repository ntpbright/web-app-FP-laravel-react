import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProfileImg from './../../../img/profile.jpg';

/* An example React component */
class Profile extends Component {
    render() {
        return (
          <div class = "card">
            <div class="row box-profile">
              <div class="col-4">
                <img class ="profile-img" src={ProfileImg}/>
              </div>
              <div class="col-6">
                <h3 class="font-bold">Somchai madee</h3>
                <h5><bold>Student number : </bold>5810541234</h5>
                <h5><bold>Faculty : </bold>Engineering</h5>
                <h5><bold>Major : </bold>Software and knowledge</h5>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Profile;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('Profile')) {
    ReactDOM.render(<Profile />, document.getElementById('Profile'));
}