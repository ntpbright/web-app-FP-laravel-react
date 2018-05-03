import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logo from './../../img/ku-logo.png';
 
/* An example React component */
class Login extends Component {
    render() {
        return (
            <div class="row-nonmargin full-screen">
              <div class="col-lg-4 col-sm-12 d-flex bg-white">
                <div class="align-self-center text-center">
                  <img class ="img-logo" src={Logo}/>
                </div>
              </div>
              <div class="col-lg-8 col-sm-12 align-self-center text-center">
                <div class="text-header-login">
                  <h1><i class="fa fa-calendar-alt"></i> Leave System</h1>
                </div>
                <div class="form">
                  <form class="login-form" action="/main">
                    <input type="id" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                  </form>
                </div>
              </div>
            </div>
        );
    }
}
 
export default Login;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('Login')) {
    ReactDOM.render(<Login />, document.getElementById('Login'));
}