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
                        Step 3/4
                    </div>
                    <h2 className="title-section text-uppercase">Bonuses</h2>
                </div>
            </div>
            <div className="w-100 my-2"></div>
            <div className="col">
              <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                  <div className="col">
                      <div className="row justify-content-center">
                        <div className="col-md-12 form-group">
                          <p>First Period <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="First Period tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="10" />
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Second Period <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Second Period tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="10" />
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Third Period <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Third Period tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="15" />
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Forth Period <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Forth Period tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="15" />
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Fifth Period <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Fifth Period tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="5" />
                        </div>
                        <div className="w-100"></div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="row justify-content-center">
                        <div className="col-md-12 form-group">
                          <p>First Bonus <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="First Bonus tooltip on top"></i></p>
                            <input type="number" className="editor-input w-100" placeholder="30" />
                          </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Second Bonus <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Second Bonus tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="10000" />
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Third Bonus <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Third Bonus tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="0.5" />
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Forth Bonus <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Forth Bonus tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="01.10.2018" />
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Fifth Bonus <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Fifth Bonus tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="01.11.2018" />
                        </div>
                        <div className="w-100"></div>
                      </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-md-6 form-group">
                    <p>Presale Bonus <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Presale Bonus tooltip on top"></i></p>
                    <input type="number" className="editor-input w-100" placeholder="50" />
                  </div>
                  <div className="w-100"></div>
                  <div className="col form-group">
                      <Link to={'/step2'}>
                        <button className="editor-btn big">Back</button>
                      </Link>
                    <Link to={'/step4'}>
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
