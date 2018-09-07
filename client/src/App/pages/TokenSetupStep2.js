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
                      Step 2/4
                  </div>
                  <h2 className="title-section text-uppercase">ICO Setup</h2>
              </div>
          </div>
          <div className="w-100 my-2"></div>
          <div className="col">
            <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                <div className="col">
                    <div className="row justify-content-center">
                      <div className="col-md-12 form-group">
                        <p>Wallet address <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Wallet address tooltip on top"></i></p>
                        <input type="text" className="editor-input w-100" placeholder="0x1ca3q56rd23123asdqwe123" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Token Price(ETH) <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Token Price tooltip on top"></i></p>
                        <input type="number" className="editor-input w-100" placeholder="Ex" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>ICO setup name <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="ICO setup name tooltip on top"></i></p>
                        <input type="text" className="editor-input w-100" placeholder="example" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Start time <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Start Time tooltip on top"></i></p>
                        <input type="date" className="editor-input w-100" placeholder="01.10.2018" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>ICO type <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="ICO type tooltip on top"></i></p>
                        <select className="editor-input w-100">
                          <option disabled selected hidden>Select ICO type</option>
                          <option value="soft-cup">Soft Cup</option>
                          <option value="hard-cup">Hard Cup</option>
                        </select>
                      </div>
                      <div className="w-100"></div>
                    </div>
                </div>
                <div className="col">
                    <div className="row justify-content-center">
                      <div className="col-md-12 form-group">
                        <p>Duration <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Duration tooltip on top"></i></p>
                          <input type="number" className="editor-input w-100" placeholder="30" />
                        </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Supply <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Supply tooltip on top"></i></p>
                        <input type="number" className="editor-input w-100" placeholder="10000" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Investor min cup <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Investor min cup tooltip on top"></i></p>
                        <input type="text" className="editor-input w-100" placeholder="0.5" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>End time <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="End Time tooltip on top"></i></p>
                        <input type="date" className="editor-input w-100" placeholder="01.10.2018" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Burn token <i className="fa fa-question-circle main-color" data-toggle="tooltip" data-placement="top" title="Burn Token tooltip on top"></i></p>
                        <input type="checkbox" />
                        <p>Yes</p>
                      </div>
                      <div className="w-100"></div>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="col form-group">
                    <Link to={'/step1'}>
                      <button className="editor-btn big">Back</button>
                    </Link>
                  <Link to={'/step3'}>
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
