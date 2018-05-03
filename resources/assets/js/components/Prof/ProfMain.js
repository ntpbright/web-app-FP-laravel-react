import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Profile from './ProfProfile';
import ActionInMain from './ActionInMain';
import Timetable from  './../../../img/timetable.png';

/* An example React component */
class ProfMain extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div class="row-nonmargin py-lg-3 px-lg-5 width-100">
                  <div class="col-lg-6 col-sm-12 p-1">
                    <Profile />
                    <div class="card mt-3 p-lg-5 px-xl-5 py-xl-3 p-1rem">
                      <div class="my-lg-3">
                        <div class="d-flex justify-content-between">
                          <h3><i class="far fa-calendar-alt"></i> Timetable</h3>
                        </div>
                        <hr class="mt-0"></hr>
                        <img src={Timetable} width="100%"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 p-lg-1 p-1">
                    <ActionInMain/>
                  </div>
                </div>
            </div>
        );
    }
}
 
export default ProfMain;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('ProfMain')) {
    ReactDOM.render(<ProfMain />, document.getElementById('ProfMain'));
}