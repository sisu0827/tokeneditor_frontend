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
                        Step 4/4
                    </div>
                    <h2 className="title-section text-uppercase">Review & Publish</h2>
                </div>
            </div>
            <div className="w-100 my-2"></div>
            <div className="col">
              <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                  <div className="col">
                      <div className="row justify-content-center">
                        <div className="col-md-12 form-group">
                          <p>Coin or token name</p>
                          <p className="main-color font-weight-bold">ExampleToken</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Choose a symbol</p>
                          <p className="main-color font-weight-bold">EXT</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Version number of token</p>
                          <p className="main-color font-weight-bold">1.0</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Initial supply</p>
                          <p className="main-color font-weight-bold">10000000</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Number of decimals</p>
                          <p className="main-color font-weight-bold">8</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>First Period</p>
                          <p className="main-color font-weight-bold">8</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>First Bonus</p>
                          <p className="main-color font-weight-bold">20</p>
                        </div>
                        <div className="w-100"></div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="row justify-content-center">
                        <div className="col-md-12 form-group">
                          <p>Wallet address</p>
                          <p className="main-color font-weight-bold">0x1ca3q56rd23123asdqwe123</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Invest min cup</p>
                          <p className="main-color font-weight-bold">10</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Crowdsale setup name</p>
                          <p className="main-color font-weight-bold">Example</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Start time</p>
                          <p className="main-color font-weight-bold">01/10/2018</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>End time</p>
                          <p className="main-color font-weight-bold">01/11/2018</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Second Period</p>
                          <p className="main-color font-weight-bold">10</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Second Bonus</p>
                          <p className="main-color font-weight-bold">10</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-12 form-group">
                          <p>Presale Bonus</p>
                          <p className="main-color font-weight-bold">50</p>
                        </div>
                        <div className="w-100"></div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="row justify-content-center">
                      <div className="col-md-12 form-group">
                        <p>Token Price(ETH)</p>
                        <p className="main-color font-weight-bold">0.5</p>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Supply</p>
                        <p className="main-color font-weight-bold">10000</p>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Duration</p>
                        <p className="main-color font-weight-bold">30</p>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>ICO type</p>
                        <p className="main-color font-weight-bold">Hard Cup</p>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Burn token</p>
                        <p className="main-color font-weight-bold">No</p>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Third Period</p>
                        <p className="main-color font-weight-bold">15</p>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-12 form-group">
                        <p>Third Bonus</p>
                        <p className="main-color font-weight-bold">15</p>
                      </div>
                      <div className="w-100"></div>
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col form-group">
                    <Link to={'/step1'}>
                       <button className="editor-btn">1</button>
                    </Link>
                    <Link to={'/step2'}>
                       <button className="editor-btn">2</button>
                    </Link>
                    <Link to={'/step3'}>
                      <button className="editor-btn">3</button>
                    </Link>
                    <Link to={'/dashboard'}>
                      <button className="editor-btn big">Publish</button>
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
