import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavChoice from './header/NavChoice';
import Profile from './box/Profile';
import ActionInMain from './box/ActionInMain';
import Timetable from  './../../img/timetable.png';

/* An example React component */
class Menu extends Component {
    render() {
        return (
            <div>
                <NavChoice />
                <div class="row py-3 px-5 width-100">
                  <div class="col-6 p-1">
                    <Profile />
                    <div class="card mt-3 p-5">
                      <div class="d-flex justify-content-between">
                        <h3><i class="far fa-calendar-alt"></i> Timetable</h3>
                      </div>
                      <hr class="mt-0"></hr>
                      <img src={Timetable} width="100%"/>
                    </div>
                  </div>
                  <div class="col-6 p-1">
                    <ActionInMain/>
                  </div>
                </div>
            </div>
        );
    }
}
 
export default Menu;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('Menu')) {
    ReactDOM.render(<Menu />, document.getElementById('Menu'));
}