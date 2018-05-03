import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

/* An example React component */
class ProfHistory extends Component {
    render() {
        return (
            <div class="">
              <Nav />
              <div class="container">
                  <div class="row">
                    <div class="col-12 card mt-3 pb-4">
                      <div class="text-center my-3">
                        <h1>History</h1>
                        <p>List of previous requests </p>
                      </div>
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
                    </div>
                  </div>
              </div>
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
        );
    }
}
 
export default ProfHistory;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('ProfHistory')) {
    ReactDOM.render(<ProfHistory />, document.getElementById('ProfHistory'));
}