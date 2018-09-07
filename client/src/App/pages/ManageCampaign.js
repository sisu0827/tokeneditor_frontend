import React, { Component } from 'react';
import { Link }             from 'react-router-dom';


class Affiliate extends Component {

  constructor(props) {
    super(props)
    this.state = {"showHideSidenav": ""}
  }

  componentDidMount(){
    document.body.id=""
  }

  toggleSidenav() {
    var css = (this.state.showHideSidenav === "active") ? "" : "active";
    this.setState({"showHideSidenav":css});
  }

  render() {

    return (
      <div className="wrapper">
        <div id="content">
            <div className="container-fluid px-md-5 col-md-9">
              <div className="my-5 col-md-12">
                <div className="panel-campaign panel-danger">
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div className="col-md-12" id="stats" style={{height:"80px"}}>
                        <div className="text-center">
                          <p className="my-2" style={{textalign: "center", fontSize:"30px", color:"rgb(69, 70, 123)", fontWeight:"bold"}}>Example Campaign</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    <div className="row my-4">
                      <div className="col-md-4">
                        <div className="row text-center align-items-center">
                          <div className="col">
                            <p className="Amount">60 ETH</p>
                            <p className="Title">Funding goal</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="row text-center align-items-center">
                          <div className="col">
                            <p className="Amount">6 ETH</p>
                            <p className="Title">Fund Raised</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="row text-center align-items-center">
                          <div className="col">
                            <p className="Amount">54</p>
                            <p className="Title">Days to go</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <div className="text-center">
                          <p className="Title">Raised Percent: 10%</p>
                          <div className="row justify-content-center">
                            <div className="col-md-8">
                              <div className="progress">
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <button className="editor-btn main big my-5" style={{backgroundColor:"white", color:"rgb(69, 70, 123)"}}><img src={window.location.origin + '/assets/images/icon_tokens_blue.png'} /> Invest</button> 
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid px-md-5 col-md-9">
              <p>Lorem ipsum dolor site amet, consectetur aidpiscing elit. Fusc interdum metus felis, eu lobortis nisi vestibulum</p>
            </div>
        </div>
    </div>
    );
  }
}
export default Affiliate;
