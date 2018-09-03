import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Auth extends Component {

  componentDidMount(){
    document.body.id="auth"
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2 className="text-uppercase">Sign in</h2>
          </div>
          <div className="w-100 my-2"></div>
          <div className="col">
            <form className="row justify-content-center" onSubmit={this.handleSubmit}>
              <div className="col-md-5 form-group">
                <p>Username or Email</p>
                <input type="text" className="editor-input w-100" placeholder="example@gmail.com" />
              </div>
              <div className="w-100"></div>
              <div className="col-md-5 form-group">
                <p>Password</p>
                <input type="text" className="editor-input w-100" placeholder="**********" />
              </div>
              <div className="w-100"></div>
              <div className="col form-group">
                <p><label><input type="checkbox" /> Remember me</label></p>
                <button className="editor-btn big"><i className="fas fa-lg fa-sign-in-alt"></i> Log in</button>
              </div>
            </form>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <div className="row justify-content-center">
              <div className="col">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="w-100 my-2"></div>
              <div className="col">
                <input type="button" className="editor-btn white big" value="Register" />
              </div>
              <div className="w-100 my-2"></div>
              <div className="col-md-4 form-group">
                <button className="editor-btn white big"><i className="fab fa-lg fa-facebook-square"></i> Sign in with FB</button>
              </div>
              <div className="col-md-4 form-group">
                <button className="editor-btn white big"><i className="fab fa-lg fa-twitter-square"></i> Sign in with Twitter</button>
              </div>
              <div className="col-md-4 form-group">
                <button className="editor-btn white big"><i className="fab fa-lg fa-google"></i> Sign in with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
