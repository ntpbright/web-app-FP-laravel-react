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
                <div class="row py-3 px-5">
                  <div class="col-6 p-1">
                    <Profile />
                    <img class="mt-3" src={Timetable} width="100%"/>
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