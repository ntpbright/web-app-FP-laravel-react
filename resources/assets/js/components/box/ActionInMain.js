import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class ActionInMain extends Component {
    render() {
        return (
          <div class = "card p-5">
            <div class="row align-items-center mb-2">
              <div class="col-12">
                <div class="d-flex">
                  <h3><i class="far fa-calendar-minus"></i> Requesting</h3>        
                </div> 
                <hr class="mt-0"></hr>
                <div class="row text-center">
                  <div class="col-4">
                    <button type="button" class="btn btn-light w-75"><i class="fas fa-procedures fa-5x"></i> <p class="requesting-title-btn">Sick leave</p></button>
                  </div>
                  <div class="col-4">
                    <button type="button" class="btn btn-light w-75"><i class="fas fa-plane fa-5x"></i> <p class="requesting-title-btn">Vacation leave</p></button>
                  </div>
                  <div class="col-4">
                    <button type="button" class="btn btn-light w-75"><i class="fas fa-universal-access fa-5x"></i> <p class="requesting-title-btn">Persornal Errand leave</p> </button>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-5">
                <div class="d-flex">
                  <h3><i class="far fa-calendar-minus"></i> Recent request</h3>
                </div> 
                <hr class="mt-0"></hr>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Course</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Sick</th>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td><span class="badge badge-success">Success</span></td>
                    </tr>
                    <tr>
                      <th scope="row">Vacation</th>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td><span class="badge badge-danger">Deline</span></td>
                    </tr>
                    <tr>
                      <th scope="row">Personal</th>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td><span class="badge badge-warning">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
}
 
export default ActionInMain;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('ActionInMain')) {
    ReactDOM.render(<ActionInMain />, document.getElementById('ActionInMain'));
}