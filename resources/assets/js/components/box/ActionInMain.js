import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class ActionInMain extends Component {
    render() {
        return (
          <div>
            <div class = "card p-lg-5 p-1rem">
              <div class="row align-items-center my-1">
                <div class="col-12 my-xl-3 my-lg-2">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3><i class="far fa-calendar-minus"></i> Requesting</h3>    
                  </div> 
                  <hr class="mt-0"></hr>
                  <div class="row text-center">
                    <div class="col-4">
                      <button type="button" class="btn btn-light w-100 h-100" ><a href="../r-SL" class="black-nondecoration"><i class="fas fa-procedures fa-5x"></i> <p class="requesting-title-btn">Sick leave</p></a></button>
                    </div>
                    <div class="col-4">
                      <button type="button" class="btn btn-light w-100 h-100" ><a href="../r-VL" class="black-nondecoration"><i class="fas fa-plane fa-5x"></i> <p class="requesting-title-btn">Vacation leave</p></a></button>
                    </div>
                    <div class="col-4">
                      <button type="button" class="btn btn-light w-100 h-100" ><a href="../r-PEL" class="black-nondecoration"><i class="fas fa-universal-access fa-5x"></i> <p class="requesting-title-btn">Persornal<br/>Errand leave</p></a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class = "card p-lg-5 mt-lg-3 p-1rem mt-2">
              <div class="col-12 my-xl-3 my-lg-2">
                <div class="d-flex justify-content-between align-items-center">
                  <h3><i class="far fa-calendar-minus"></i> Recent request</h3>
                  <h5><a href="./history">View all</a></h5>
                </div> 
                <hr class="mt-0"></hr>
                <table class="table table-hover table-responsive-sm">
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
                      <td><h5><button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModal">Success</button></h5></td>
                      {/* <td><h5><button type="button" class="badge badge-pill badge-success">Success</button></h5></td> */}
                    </tr>
                    <tr>
                      <th scope="row">Example of title</th>
                      <td>Vacation</td>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td><h5><button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModal">Deline</button></h5></td>
                      {/* <td><h5><span class="badge badge-pill badge-danger">Deline</span></h5></td> */}
                    </tr>
                    <tr>
                      <th scope="row">Example of title</th>
                      <td>Personal</td>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td><h5><button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#exampleModal">Pending</button></h5></td>
                      {/* <td><h5><span class="badge badge-pill badge-warning">Pending</span></h5></td> */}
                    </tr>
                  </tbody>
                </table>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Your request status</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        Your requesting is in or system.
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
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