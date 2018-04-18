import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class ActionInMain extends Component {
    render() {
        return (
          <div class = "card">
            <div class="row box-profile">
              <div class="col-12">
                <h3><i class="far fa-calendar-minus"></i> Requesting</h3>
                <hr></hr>
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
              <div class="col-6">
                <h3 class="font-bold">Somchai madee</h3>
                <h5><bold>Student number : </bold>5810541234</h5>
                <h5><bold>Faculty : </bold>Engineering</h5>
                <h5><bold>Major : </bold>Software and knowledge</h5>
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