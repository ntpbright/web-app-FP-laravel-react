import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavChoice from './header/NavChoice';

/* An example React component */
class History extends Component {
    render() {
        return (
            <div class="">
                <NavChoice />
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
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default History;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('History')) {
    ReactDOM.render(<History />, document.getElementById('History'));
}