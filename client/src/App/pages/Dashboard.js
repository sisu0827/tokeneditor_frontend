import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {

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
                    <a href="/Affiliate"><i className="fas fa-lg fa-users"></i> Affiliate</a>
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
                <h2 className="text-uppercase">Top campaigns</h2>
              </div>

              <div className="row my-4">
                <div className="col-md-4">
                  <div className="row editor-block">
                    <div className="col">
                      <p className="m-0">Example campaign</p>
                      <p className="text-muted">by Oleh</p>
                    </div>
                    <div className="col-auto">
                      <p className="font-weight-bold m-0">60 ETH</p>
                      <p className="text-muted">Funding goal</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                      <button className="editor-btn main small"><i className="fas fa-eye"></i> View</button>
                    </div>
                    <div className="col-auto">
                      <p className="font-weight-bold m-0">6 ETH</p>
                      <p className="text-muted">Fund Raised</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                      <p className="m-0 mb-1">Raised persent: 10%</p>
                      <div className="progress">
                        <span></span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <p className="font-weight-bold m-0">54</p>
                      <p className="text-muted">Days to go</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row editor-block">
                    <div className="col">
                      <p className="m-0">Example campaign</p>
                      <p className="text-muted">by Oleh</p>
                    </div>
                    <div className="col-auto">
                      <p className="font-weight-bold m-0">60 ETH</p>
                      <p className="text-muted">Funding goal</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                      <button className="editor-btn main small"><i className="fas fa-eye"></i> View</button>
                    </div>
                    <div className="col-auto">
                      <p className="font-weight-bold m-0">6 ETH</p>
                      <p className="text-muted">Fund Raised</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                      <p className="m-0 mb-1">Raised persent: 10%</p>
                      <div className="progress">
                        <span></span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <p className="font-weight-bold m-0">54</p>
                      <p className="text-muted">Days to go</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row editor-block">
                    <div className="col">
                      <p className="m-0">Example campaign</p>
                      <p className="text-muted">by Oleh</p>
                    </div>
                    <div className="col-auto">
                      <p className="font-weight-bold m-0">60 ETH</p>
                      <p className="text-muted">Funding goal</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                      <button className="editor-btn main small"><i className="fas fa-eye"></i> View</button>
                    </div>
                    <div className="col-auto">
                      <p className="font-weight-bold m-0">6 ETH</p>
                      <p className="text-muted">Fund Raised</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                      <p className="m-0 mb-1">Raised persent: 10%</p>
                      <div className="progress">
                        <span></span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <p className="font-weight-bold m-0">54</p>
                      <p className="text-muted">Days to go</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center my-4">
                <button className="editor-btn main big"><i className="fas fa-lg fa-search"></i> View other campaigns</button>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="row text-center align-items-center editor-block square" id="first">
                    <div className="col">
                      <p>Want to generate token?</p>
                      <button className="editor-btn main big"><i className="fab fa-lg fa-ethereum"></i> Genetate token</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row text-center align-items-center editor-block square" id="second">
                    <div className="col">
                      <p className="m-0">Already have a token?</p>
                      <p className="m-0">Create a campaign</p>
                      <button className="editor-btn main big"><i className="fas fa-lg fa-sign"></i> Create campaign</button>
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
export default Dashboard;
