import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Register extends Component {

  componentDidMount(){
    document.body.id="register"
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (

      <div className="container my-4">
        <div className="container">
          <Link to={'/'}>
              <i className="fas fa-sg fa-back"></i><span className="span-space"/> Back    
          </Link>
        </div>
        <div className="row text-center my-10">
          <div className="col">
            <h2 className="text-uppercase">Sign UP</h2>
          </div>
          <div className="w-100 my-2"></div>
          <div className="col">
            <form className="row justify-content-center" onSubmit={this.handleSubmit}>
              <div className="col-md-5 form-group">
                <p>First name</p>
                <input type="text" className="editor-input w-100" placeholder="John" />
              </div>
              <div className="w-100"></div>
              <div className="col-md-5 form-group">
                <p>Last name</p>
                <input type="text" className="editor-input w-100" placeholder="Smith" />
              </div>
              <div className="w-100"></div>

              <div className="col-md-5 form-group">
                <p>Username</p>
                <input type="text" className="editor-input w-100" placeholder="example" />
              </div>
              <div className="w-100"></div>
              <div className="col-md-5 form-group">
                <p>Email</p>
                <input type="text" className="editor-input w-100" placeholder="example@gmail.com" />
              </div>
              <div className="w-100"></div>
              <div className="col-md-5 form-group">
                <p>Password</p>
                <input type="text" className="editor-input w-100" placeholder="********" />
              </div>
              <div className="w-100"></div>
              <div className="col-md-5 form-group">
                <p>Confirm password</p>
                <input type="text" className="editor-input w-100" placeholder="********" />
              </div>
              <div className="w-100"></div>                                                        
              <div className="col form-group">
                <Link to={'/dashboard'}>
                  <button className="editor-btn big"><i className="fas fa-sg fa-check"></i> Register</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
