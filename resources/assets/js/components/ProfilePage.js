import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavChoice from './header/NavChoice';
import ProfileImg from './../../img/profile.jpg';

/* An example React component */
class ProfilePage extends Component {
    render() {
        return (
            <div>
              <NavChoice />
              <div class="container mt-3">
                <div class="row">
                  <div class="col-lg-12 card px-5">
                    <div class="d-flex justify-content-between align-items-center mt-5">
                      <h2>Profile</h2>
                    </div>
                    <hr class="mt-0"></hr>
                    <div class="row">
                      <div class="col-lg-4 col-sm-12">
                        <div class="text-center">
                          <img class ="profile-img w-75" src={ProfileImg}/>
                          <div class="input-group mt-3">
                            <div class="custom-file">
                              <input type="file" class="custom-file-input" id="inputGroupFile01"></input>
                              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-8 col-sm-12">
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label for="stdid">Student ID</label>
                              <input type="number" class="form-control" id="stdid" placeholder="ex. 581051234"></input>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label for="fisrtname">Fisrtname</label>
                              <input type="text" class="form-control" id="fisrtname" placeholder="Fisrtname"></input>
                            </div>
                            <div class="form-group">
                              <label for="faculty">Faculty</label>
                              <input type="text" class="form-control" id="faculty" placeholder="ex. Engineering"></input>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label for="Lastname">Lastname</label>
                              <input type="text" class="form-control" id="lastname" placeholder="Lastname"></input>
                            </div>
                            <div class="Major">
                              <label for="major">Major</label>
                              <input type="text" class="form-control" id="major" placeholder="ex. Software and knowledge"></input>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <label for="address">Address</label>
                              <textarea class="form-control" id="address" rows="6"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="my-3">
                      <div class="d-flex justify-content-between">
                        <button type="button" class="btn btn-danger btn-lg " data-toggle="modal" data-target="#back">Back</button>
                        <button type="button" class="btn btn-primary btn-lg "  data-toggle="modal" data-target="#save">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Modal --> */}
              <div class="modal fade" id="save" tabindex="-1" role="dialog" aria-labelledby="save" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Are you sure to save this information.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>                    
                      <a href="/main" class="btn btn-primary" role="button">Yes</a>
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
                      Your information does not save?
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
 
export default ProfilePage;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('ProfilePage')) {
    ReactDOM.render(<ProfilePage />, document.getElementById('ProfilePage'));
}