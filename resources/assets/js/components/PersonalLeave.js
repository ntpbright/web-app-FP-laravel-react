import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavChoice from './header/NavChoice';
import Profile from './box/Profile';
import ActionInMain from './box/ActionInMain';
import Datepicker from './Datepicker';
import Timetable from  './../../img/timetable.png';

/* An example React component */
class PersonalLeave extends Component {
    render() {
        return (
          <div>
            <NavChoice />
            <div class="container">
              <div class="row">
                <div class="col-12 card mt-5">
                  <div class="text-center my-3">
                    <h3><i class="fas fa-universal-access fa-3x"></i><br/> Persornal Errand leave</h3>
                  </div>
                  <form>
                    <div class="row">
                      <div class="col-lg-4 col-sm-6">
                        <div class="form-group">
                          <label for="Course number">Course number</label>
                          <input type="course-number" class="form-control" id="Course number" placeholder="Couse number ex. 01223412"></input>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6">
                        <div class="form-group">
                          <label for="Teacher">Teacher</label>
                          <input type="Teacher" class="form-control" id="Teacher" placeholder="Name of teacher in course" disabled></input>
                        </div>
                      </div>
                      <div class="col-lg-2 col-sm-6">
                        <div class="form-group">
                          <label>Start date</label>
                          <Datepicker />
                        </div>
                      </div>
                      <div class="col-lg-2 col-sm-6">
                        <div class="form-group">
                          <label>End date</label>
                          <Datepicker />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                          <label for="title-r">Title</label>
                          <input type="title-r" class="form-control" id="title-r" placeholder="Title of your request"></input>
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                          <label for="file">Select your attract file</label>
                          <div class="custom-file">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                            <input type="file" class="custom-file-input" id="inputGroupFile01"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="detail">Detail</label>
                      <textarea class="form-control" id="detail" rows="12"></textarea>
                    </div>
                  </form>
                  <div class="my-3">
                    <div class="d-flex justify-content-between">
                      <button type="button" class="btn btn-danger btn-lg " data-toggle="modal" data-target="#back">Back</button>
                      <button type="button" class="btn btn-primary btn-lg "  data-toggle="modal" data-target="#send">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="send" tabindex="-1" role="dialog" aria-labelledby="send" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Are you sure to sent this request.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>                    
                    <a href="/main" class="btn btn-primary" role="button">Confirmation</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="back" tabindex="-2" role="dialog" aria-labelledby="back" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Go to previous page</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Your information will lose?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <a href="/main" class="btn btn-danger" role="button">Go back</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default PersonalLeave;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('PersonalLeave')) {
    ReactDOM.render(<PersonalLeave />, document.getElementById('PersonalLeave'));
}