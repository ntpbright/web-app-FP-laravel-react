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
                    <h3><i class="far fa-calendar-minus"></i> Notification</h3>    
                  </div> 
                  <hr class="mt-0"></hr>
                  <div class="row text-center">
                    <div class="col-6 text-center">
                      <h3>15</h3>
                      <p>New request</p>
                    </div>
                    <div class="col-6 text-center">
                      <h3>3</h3>
                      <p>Pending</p>
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
                      <th scope="col">Cosider</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Example of title</th>
                      <td>Sick</td>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td>
                        <h5><button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#more-detail">More detail</button></h5>
                      </td>
                      {/* <td><h5><button type="button" class="badge badge-pill badge-success">Success</button></h5></td> */}
                    </tr>
                    <tr>
                      <th scope="row">Example of title</th>
                      <td>Vacation</td>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td>
                        <h5><button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#more-detail">More detail</button></h5>
                      </td>
                      {/* <td><h5><span class="badge badge-pill badge-danger">Deline</span></h5></td> */}
                    </tr>
                    <tr>
                      <th scope="row">Example of title</th>
                      <td>Personal</td>
                      <td>Web application</td>
                      <td>19/04/2018-19/04/2018</td>
                      <td>
                        <h5><button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#more-detail">More detail</button></h5>
                      </td>
                      {/* <td><h5><span class="badge badge-pill badge-warning">Pending</span></h5></td> */}
                    </tr>
                  </tbody>
                </table>
                {/* Modal */}
                <div class="modal fade" id="more-detail" tabindex="-1" role="dialog" aria-labelledby="more-detail" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="more-detail">Title of request</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        Student number : 5810541234<br/>
                        Name : Somchai Madee<br/>
                        Attrach file : none<br/>
                        Detail:
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Deline</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal">Approve</button>
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