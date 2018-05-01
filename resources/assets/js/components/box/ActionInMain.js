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
                    <button type="button" class="btn btn-light w-75" ><a href="../r-SL"><i class="fas fa-procedures fa-5x"></i> <p class="requesting-title-btn">Sick leave</p></a></button>
                  </div>
                  <div class="col-4">
                    <button type="button" class="btn btn-light w-75" href="../r-VL"><i class="fas fa-plane fa-5x"></i> <p class="requesting-title-btn">Vacation leave</p></button>
                  </div>
                  <div class="col-4">
                    <button type="button" class="btn btn-light w-75" href="../r-PEL"><i class="fas fa-universal-access fa-5x"></i> <p class="requesting-title-btn">Persornal<br/>Errand leave</p> </button>
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
                      <th scope="col">Type</th>
                      <th scope="col">Course</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Example of title</th>
                      <td>Sick</td>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td><h5><span class="badge badge-pill badge-success">Success</span></h5></td>
                    </tr>
                    <tr>
                      <th scope="row">Example of title</th>
                      <td>Vacation</td>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td><h5><span class="badge badge-pill badge-danger">Deline</span></h5></td>
                    </tr>
                    <tr>
                      <th scope="row">Example of title</th>
                      <td>Personal</td>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td><h5><span class="badge badge-pill badge-warning">Pending</span></h5></td>
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