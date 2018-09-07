import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-toggle-switch';


class Billingupdate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showHideSidenav: ""
    }
  }   

  componentDidMount(){
    document.body.id="billing"
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
                <h5><img width="25%" height="25%" src="https://i.imgur.com/sMK1rIY.png" /><a href="/dashboard">Token Editor</a></h5>
            </div>

            <ul className="list-unstyled">
                <li>
                    <a href="#"><i className="fab fa-lg fa-ethereum"></i> Generate</a>
                </li>
                <li>
                    <a href="/Tokens"><i className="fas fa-lg fa-coins"></i> Tokens</a>
                </li>
                <li>
                    <a href="/compaign"><i className="fas fa-lg fa-sign"></i> Campaigns</a>
                </li>
                <li>
                    <a href="/KycAml"><i className="fas fa-lg fa-id-card"></i> KYC/AML</a>
                </li>
                <li>
                    <a href="/Transactions"><i className="fas fa-lg fa-chart-bar"></i> Transactions</a>
                </li>
                <li className="selected-li">
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

            <div className="container-fluid col-md-12">
              
              <div className="row justify-content-center">
                <h2 className="text-uppercase">Billing</h2>
              </div>

              <div className="row my-4 text-center">
                <div className="col col-md-12">
                  <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                    <div className="editor-block container-fluid col-md-8">
                      <div className="row container-fluid my-4">
                        <div className="row col">
                        <div className="col">
                          <p className="text-muted">Balance</p>
                          <p className="font-weight-bold m-0">4.32 ETH</p>
                        </div>
                        <div className="col">
                          <p className="text-muted">Usage</p>
                          <p className="font-weight-bold m-0">17.12 ETH</p>
                        </div>
                        <div className="col">
                          <button className="editor-btn main big"><img src="assets/images/dollar_icon.png" />&nbsp; Refill</button>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="settingeditor-block container-fluid my-5">
                      <div className="row container-fluid my-4">
                        <table className="col-md-12">
                          <tr>
                            <th>Date</th>
                            <th>Amount</th> 
                            <th>Type</th>
                            <th>Description</th>
                          </tr>
                          <tr>
                            <td colspan="4"><hr className="col-md-12"/></td>
                          </tr>
                          
                          <tr >
                            <td>2018-8-24 23:32</td>
                            <td>1.2 ETH</td>
                            <td>Refill</td>
                            <td>Balance refill from ETH</td>
                          </tr>
                          <tr>
                            <td>2018-8-24 23:32</td>
                            <td>1.2 ETH</td>
                            <td>Refill</td>
                            <td>Balance refill from ETH</td>
                          </tr>
                          <tr>
                            <td>2018-8-24 23:32</td>
                            <td>1.2 ETH</td>
                            <td>Refill</td>
                            <td>Balance refill from ETH</td>
                          </tr>
                          <tr>
                            <td>2018-8-24 23:32</td>
                            <td>1.2 ETH</td>
                            <td>Refill</td>
                            <td>Balance refill from ETH</td>
                          </tr>
                          <tr>
                            <td>2018-8-24 23:32</td>
                            <td>1.2 ETH</td>
                            <td>Refill</td>
                            <td>Balance refill from ETH</td>
                          </tr>
                          <tr>
                            <td>2018-8-24 23:32</td>
                            <td>1.2 ETH</td>
                            <td>Refill</td>
                            <td>Balance refill from ETH</td>
                          </tr>
                          <tr>
                            <td>2018-8-24 23:32</td>
                            <td>1.2 ETH</td>
                            <td>Refill</td>
                            <td>Balance refill from ETH</td>
                          </tr>
                          <tr>
                            <td>2018-8-24 23:32</td>
                            <td>1.2 ETH</td>
                            <td>Refill</td>
                            <td>Balance refill from ETH</td>
                          </tr>
                        </table>
                      </div>
                    </div>


                  </form>
                </div>


              </div>



              <div className="row justify-content-center my-4">
              </div>
              <div className="row justify-content-center my-4">
              </div>
              <div className="row justify-content-center my-4">
              </div>
              <div className="row justify-content-center my-4">
              </div>  
              <div className="row justify-content-center my-4">
              </div>  
              <div className="row justify-content-center my-4">
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
export default Billingupdate;
