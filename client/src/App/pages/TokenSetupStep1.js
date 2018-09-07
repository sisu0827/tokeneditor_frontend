import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Register extends Component {

  componentDidMount(){
    document.body.id="token-setup-step1"
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (

      <div className="container my-4">
        <div className="row text-center my-10">
          <div className="col">
            <div className="editor-token-setup">
                <div className="step-section text-uppercase">
                    Step 1/4
                </div>
                <h2 className="title-section text-uppercase">Token Setup</h2>
            </div>
          </div>
          <div className="w-100 my-2"></div>
          <div className="col">
            <form className="row justify-content-center" onSubmit={this.handleSubmit}>
              <div className="col-md-5 form-group">
                <p>Coin or token name <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Token Name tooltip on top"></i></p>
                <input type="text" className="editor-input w-100" placeholder="ExampleToken" />
              </div>
              <div className="w-100"></div>
              <div className="col-md-5 form-group">
                <p>Choose a symbol <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Token symbol tooltip on top"></i></p>
                <input type="text" className="editor-input w-100" placeholder="EXT" />
              </div>
              <div className="w-100"></div>
              <div className="col-md-5 form-group">
                <p>Version number of token <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Token version tooltip on top"></i></p>
                <input type="text" className="editor-input w-100" placeholder="1.0" />
              </div>
              <div className="w-100"></div>
              <div className="col-md-5 form-group">
                <p>Initial supply <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Initial supply tooltip on top"></i></p>
                <input type="text" className="editor-input w-100" placeholder="100000000" />
              </div>
              <div className="w-100"></div>
              <div className="col-md-5 form-group">
                <p>Number of decimals <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Number of decimals Price tooltip on top"></i></p>
                <input type="text" className="editor-input w-100" placeholder="18" />
              </div>
              <div className="w-100"></div>
              <div className="col form-group">
                <Link to={'/step2'}>
                  <button className="editor-btn big">Continue</button>
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
