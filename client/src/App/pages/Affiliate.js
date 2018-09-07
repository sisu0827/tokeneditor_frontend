import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
        <nav id="sidebar" className={this.state.showHideSidenav}>
            <div className="sidebar-header">
                <h5><img width="25%" height="25%" src="https://i.imgur.com/sMK1rIY.png" />Token Editor</h5>
            </div>

            <ul className="list-unstyled">
                <li>
                    <a href="#"><i className="fab fa-lg fa-ethereum"></i> Generate</a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-lg fa-coins"></i> Tokens</a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-lg fa-sign"></i> Campaigns</a>
                </li>
                <li>
                    <a href="/KycAml"><i className="fas fa-lg fa-id-card"></i> KYC/AML</a>
                </li>
                <li>
                    <a href="/Transactions"><i className="fas fa-lg fa-chart-bar"></i> Transactions</a>
                </li>
                <li>
                    <a href="/billing"><i className="far fa-lg fa-money-bill-alt"></i> Billing</a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-lg fa-users"></i> Affiliate</a>
                </li>
                <li>
                    <a href="/setting"><i className="fas fa-lg fa-cog"></i> Settings</a>
                </li>
            </ul>
            <div className="row my-5 px-2 align-items-center no-gutters">
              <div className="col">
                <i className="fas fa-2x fa-user"></i>
              </div>
              <div className="col">
                <p className="m-0">Oleh</p>
                <span className="profile-email">typicaladmsky@gmail.com</span>
              </div>
            </div>
            <div className="row justify-content-center main-color my-5">
              <div className="col-auto">
                <a href="http://twitter.com/" target="_blank"><i className="fab fa-lg fa-twitter"></i></a>
              </div>
              <div className="col-auto">
                <a href="http://www.facebook.com/" target="_blank"><i className="fab fa-lg fa-facebook-f"></i></a>
              </div>
              <div className="col-auto">
                <a href="https://medium.com/" target="_blank"><i className="fab fa-lg fa-medium-m"></i></a>
              </div>
              <div className="col-auto">
                <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-lg fa-youtube"></i></a>
              </div>
            </div>
            <p className="text-muted text-center my-5">@ 2018 Token Editor</p>
        </nav>

        <div id="content">

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" onClick={this.toggleSidenav.bind(this)} className="editor-btn main">
                        <i className="fas fa-align-left"></i>
                        <span> Collapse menu</span>
                    </button>
                    <button className="editor-btn main d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                              <Link to={'/'} className="nav-link">
                                Log out
                              </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid px-md-5">
              <div className="row justify-content-center">
                <h2 className="text-uppercase">Affiliate</h2>
              </div>
              <div className="row editor-block">
                <div className="col-md-12">
                  <div className="row text-center align-items-center square">
                    <div className="col">
                      <p>Your referral link</p>
                      <div className="row justify-content-center">
                        <label className="editor-btn link big" for="male">https://example.com /ref/4321</label>
                      
                        <div className="row">
                          <button className="editor-btn copy">
                          <i></i> copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <div className="panel panel-danger">
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div className="col-md-12" id="stats" style={{backgroundColor: "rgb(69, 70, 123)", color:"white", height:"50px"}}>
                        <div className="text-center">
                          <p style={{textalign: "center"}}>Statstics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    <div className="row my-4">
                      <div className="col-md-3">
                        <div className="row text-center align-items-center editor-statstics bodyPart">
                          <div className="col">
                            <p className="Title my-3">Unpaid referrals</p>
                            <p className="Amount">10</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-3">
                        <div className="row text-center align-items-center editor-statstics bodyPart">
                          <div className="col">
                            <p className="Title my-3">Paid referrals</p>
                            <p className="Amount">3</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="row text-center align-items-center editor-statstics bodyPart">
                          <div className="col">
                            <p className="Title my-3">Visits</p>
                            <p className="Amount">743</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="row text-center align-items-center editor-statstics bodyPart">
                          <div className="col">
                            <p className="Title my-3">Conversion rate</p>
                            <p className="Amount">30%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-3">
                        <div className="row text-center align-items-center editor-statstics bodyPart">
                          <div className="col">
                            <p className="Title my-3">Unpaid earnings</p>
                            <p className="Amount">$234</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row text-center align-items-center editor-statstics bodyPart">
                          <div className="col">
                            <p className="Title my-3">Paid earnings</p>
                            <p className="Amount">$3642</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row text-center align-items-center editor-statstics bodyPart">
                          <div className="col">
                            <p className="Title my-3">Commission rate</p>
                            <p className="Amount">10%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row justify-content-center">

              <div className="col-md-4" id="stats">
                <div className="row text-center main-color">
                  <div className="col">
                    <i className="fas fa-2x fa-user-friends"></i>
                    <p className="m-0">Unique users</p>
                    <p className="m-0">13433</p>
                  </div>
                  <div className="col">
                    <i className="fas fa-2x fa-shopping-cart"></i>
                    <p className="m-0">ICO buyers</p>
                    <p className="m-0">189</p>
                  </div>
                  <div className="col">
                    <i className="fas fa-2x fa-dollar-sign"></i>
                    <p className="m-0">Total investment</p>
                    <p className="m-0">$56542</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
    );
  }
}
export default Affiliate;
