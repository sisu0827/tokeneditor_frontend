import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import Modal                from 'react-modal';
const customStyles = {
  content : {
    width                 : '70%',
    height                : '102%',
    top                   : '52%',
    left                  : '50%',
    right                 : 'auto',
    transform             : 'translate(-50%, -50%)',
    transparent           : '1',
    backgroundColor       : 'rgba(0, 0, 0, .00)',
    webkitboxshadow       : '0 1px 1px rgba(0,0,0,.05)',
    boxshadow             : '0 1px 1px rgba(0,0,0,.05)',
    border                : '0px dashed white',
    borderRadius          : '20px'
  }
};


const buttonStyle = {
    border        : 'none',
    // padding       : '0',
    fontSize      : '13px',
    background    : 'inherit',
    color         : 'white',
    cursor        : 'pointer',
};

Modal.setAppElement('#modal')

class Tokens extends Component {

  constructor(props) {
    super(props);
    this.state = {  "showHideSidenav"   : "",
                    "modalIsOpen"       : false,
                    "viewSelection"     : 1,
                    "firstBtn"          : "selected-li",
                    "secondBtn"         : "",
                    "thirdBtn"          : "",
                    "fourthBtn"         : "",
    };

    this.openModal        = this.openModal.bind(this);
    this.afterOpenModal   = this.afterOpenModal.bind(this);
    this.closeModal       = this.closeModal.bind(this);
    this.showOne          = this.showOne.bind(this);
    this.showTwo          = this.showTwo.bind(this);
    this.showThree        = this.showThree.bind(this);
    this.showFour         = this.showFour.bind(this);

  }

  componentDidMount(){
    document.body.id=""
  }

  toggleSidenav() {

    var css = (this.state.showHideSidenav === "active") ? "" : "active";
    this.setState({"showHideSidenav"  :css});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  showOne() {
    this.setState({viewSelection : 1});
  }

  showTwo() {
    this.setState({viewSelection : 2});
  }

  showThree() {
    this.setState({viewSelection : 3});
  }

  showFour() {
    this.setState({viewSelection : 4});
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
                <li className="selected-li">
                    <a href="/Tokens"><i className="fas fa-lg fa-coins"></i> Tokens</a>
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
                <h2 className="text-uppercase">Tokens</h2>
              </div>

              <div className="col table-responsive editor-block my-4">
                <table className="table" bordercolor="white">
                  <thead style={{fontSize:"15px", textAlign:"center"}}>
                    <tr style={{border:"none"}}>
                      <th style={{border:"none"}}>Name</th>
                      <th style={{border:"none"}}>Symbol</th>
                      <th style={{border:"none"}}>Version</th>
                      <th style={{border:"none"}}>Address</th>
                    </tr>
                  </thead>
                  <tbody style={{fontSize:"13px", textAlign:"center"}}>
                    <tr>
                      <td>ExampleToken</td>
                      <td>EXT</td>
                      <td>1.0</td>
                      <td>10xad4777029ae71f2b2kall</td>
                      
                      <button className="editor-btn main small" 
                        onClick={this.openModal}
                      >
                        <i className="fas fa-edit"></i> Manage
                      </button>

                      <button className="editor-btn main small mx-4">
                        <i className="fas fa-eye"></i> View
                      </button>

                    </tr>
                    <tr className="my-4">
                      <td>SuzyToken</td>
                      <td>SUZY</td>
                      <td>1.2</td>
                      <td>0xad4777029ae71f2b2kall</td>
                      <button className="editor-btn main small" 
                        onClick={this.openModal}
                      >
                        <i className="fas fa-edit"></i> Manage
                      </button>
                      <button className="editor-btn main small mx-4">
                        <i className="fas fa-eye"></i> View
                      </button>
                    </tr>                    
                  </tbody>
                </table>
              </div>
            </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="panel panel-danger">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div id="stats" style={{backgroundColor: "rgb(69, 70, 123)", color:"white", height:"50px", width:"100%"}}>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-11">
                        <div className="col-md-8">
                          <p className="Title" style={{textAlign:"right"}}>Manage ExampleToken</p>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="col-md-12">
                          <button style = {buttonStyle} 
                            onClick={this.closeModal}
                            type="button" 
                            aria-label="close"
                          >
                            <p style={{marginLeft:"-20px"}}>CLOSE</p>
                          </button>                      
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="row my-4">
                <div className="col-md-3">
                  {
                    this.state.viewSelection == 1 ?
                      <button className="row text-center align-items-center editor-button selected-li" onClick={this.showOne}> 
                        <div className="col">
                          <p className="Title my-3"><img src={window.location.origin + '/assets/images/icon_info_white.png'} /></p>
                          <p className="Amount">info</p>
                        </div>
                      </button>
                      :
                      <button className="row text-center align-items-center editor-button" onClick={this.showOne}> 
                        <div className="col">
                          <p className="Title my-3"><img src={window.location.origin + '/assets/images/icon_info_blue.png'} /></p>
                          <p className="Amount">info</p>
                        </div>
                      </button>
                  }
                </div>
                
                <div className="col-md-3">
                  {
                    this.state.viewSelection == 2 ?
                      <button className="row text-center align-items-center editor-button selected-li" onClick={this.showTwo}> 
                        <div className="col">
                          <p className="Title my-3"><img src={window.location.origin + '/assets/images/icon_ico_white.png'} /></p>
                          <p className="Amount">ICO</p>
                        </div>
                      </button>
                      :
                      <button className="row text-center align-items-center editor-button" onClick={this.showTwo}> 
                        <div className="col">
                          <p className="Title my-3"><img src={window.location.origin + '/assets/images/icon_ico_blue.png'} /></p>
                          <p className="Amount">ICO</p>
                        </div>
                      </button>
                  }
                </div>

                <div className="col-md-3">
                  {
                    this.state.viewSelection == 3 ?
                      <button className="row text-center align-items-center editor-button selected-li" onClick={this.showThree}> 
                        <div className="col">
                          <p className="Title my-3"><img src={window.location.origin + '/assets/images/icon_tokens_white.png'} /></p>
                          <p className="Amount">Tokens</p>
                        </div>
                      </button>
                      :
                      <button className="row text-center align-items-center editor-button" onClick={this.showThree}> 
                        <div className="col">
                          <p className="Title my-3"><img src={window.location.origin + '/assets/images/icon_tokens_blue.png'} /></p>
                          <p className="Amount">Tokens</p>
                        </div>
                      </button>
                  }
                </div>

                <div className="col-md-3">
                  {
                    this.state.viewSelection == 4 ?
                      <button className="row text-center align-items-center editor-button selected-li" onClick={this.showFour}> 
                        <div className="col">
                          <p className="Title my-3"><img src={window.location.origin + '/assets/images/icon_whitelist_white.png'} /></p>
                          <p className="Amount">Whitelist</p>
                        </div>
                      </button>
                      :
                      <button className="row text-center align-items-center editor-button" onClick={this.showFour}> 
                        <div className="col">
                          <p className="Title my-3"><img src={window.location.origin + '/assets/images/icon_whitelist_blue.png'} /></p>
                          <p className="Amount">Whitelist</p>
                        </div>
                      </button>
                  }
                </div>
              </div>
              <hr/>

              { 
                this.state.viewSelection == 1 ?  
                <div className="row container-fluid my-4">
                  <div className="col-md-6">

                    <div className="col-md-12 form-group">
                      <div className="col">
                        <p className="Title my-3" style={{textAlign:"center"}}>Start Date</p>
                        <p className="Amount" style={{textAlign:"center", color:"rgb(69, 70, 123)"}}>08/19/18 2:30:56 PM</p>
                      </div>
                    </div>

                    <div className="col-md-12 form-group my-5">
                      <div className="col">
                        <p className="Title my-3" style={{textAlign:"center"}}>End Date</p>
                        <p className="Amount" style={{textAlign:"center", color:"rgb(69, 70, 123)"}}>08/20/18 12:59:44 PM</p>
                      </div>
                    </div>

                    <div className="col-md-12 form-group my-5">
                      <div className="col">
                        <p className="Title my-3" style={{textAlign:"center"}}>Ether received</p>
                        <p className="Amount" style={{textAlign:"center", color:"rgb(69, 70, 123)"}}>6</p>
                      </div>
                    </div>

                    <div className="col-md-12 form-group my-5">
                      <div className="col">
                        <p className="Title my-3" style={{textAlign:"center"}}>Min contribution presale</p>
                        <p className="Amount" style={{textAlign:"center", color:"rgb(69, 70, 123)"}}>0.2 ETH</p>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-6">

                    <div className="col-md-12 form-group">
                      <div className="col">
                        <p className="Title my-3" style={{textAlign:"center"}}>Tokens Sold</p>
                        <p className="Amount" style={{textAlign:"center", color:"rgb(69, 70, 123)"}}>3,333</p>
                      </div>
                    </div>

                    <div className="col-md-12 form-group my-5">
                      <div className="col">
                        <p className="Title my-3" style={{textAlign:"center"}}>Token price</p>
                        <p className="Amount" style={{textAlign:"center", color:"rgb(69, 70, 123)"}}>0.0003 ETH</p>
                      </div>
                    </div>

                    <div className="col-md-12 form-group my-5">
                      <div className="col">
                        <p className="Title my-3" style={{textAlign:"center"}}>Which sale</p>
                        <p className="Amount" style={{textAlign:"center", color:"rgb(69, 70, 123)"}}>Public Sale</p>
                      </div>
                    </div>

                    <div className="col-md-12 form-group my-5">
                      <div className="col">
                        <p className="Title my-3" style={{textAlign:"center"}}>Min contribution public sale</p>
                        <p className="Amount" style={{textAlign:"center", color:"rgb(69, 70, 123)"}}>0.1 ETH</p>
                      </div>
                    </div>

                  </div>
                </div>
                : null
              }

              { 
                this.state.viewSelection == 2 ?  
                <div className="row container-fluid my-4 mx-3">
                  <div className="row container-fluid">

                    <div className="col-md-12 form-group">
                      <div className="row">
                        <div className="col-md-6" style={{textAlign:"center"}}>
                          <button className="editor-btn main big" style={{width:"100%"}}><img src={window.location.origin + '/assets/images/icon_startico.png'} /> Start ICO</button> 
                        </div>
                        <div className="col-md-6" style={{textAlign:"center"}}>
                          <button className="editor-btn main big" style={{width:"100%"}}><img src={window.location.origin + '/assets/images/icon_advance.png'} /> Advanced main sale</button> 
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="row">
                        <div className="col-md-6" style={{textAlign:"center"}}>
                          <button className="editor-btn main big" style={{width:"100%"}}><img src={window.location.origin + '/assets/images/icon_emergencystop.png'} /> Emergency stop</button> 
                        </div>
                        <div className="col-md-6" style={{textAlign:"center"}}>
                          <button className="editor-btn main big" style={{width:"100%"}}><img src={window.location.origin + '/assets/images/icon_emergencystart.png'} /> Emergency start</button> 
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="row">
                        <div className="col-md-12" style={{textAlign:"center"}}>
                          <button className="editor-btn main big" style={{width:"50%"}}><img src={window.location.origin + '/assets/images/icon_finalize.png'} /> Finalize</button> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                : null
              }

              { 
                this.state.viewSelection == 3 ?  
                <div className="row container-fluid my-4 mx-3">
                  <div className="row container-fluid">
                    <div className="col-md-12 form-group">
                      <div className="col-md-12" style={{textAlign:"center"}}>
                        <div className="col">
                          <p className="Title my-3" style={{textAlign:"center"}}>ETH address</p>
                          <input type="text" className="editor-input" placeholder="Text" style={{width:"70%"}}/>

                          <p className="Title my-3" style={{textAlign:"center" }}>Amount of tokens</p>
                          <input type="text" className="editor-input" placeholder="Text" style={{width:"70%"}}/>

                        </div>
                        
                        <button className="editor-btn main big my-5"><img src={window.location.origin + '/assets/images/icon_sendtoken.png'} /> Send tokens</button>

                      </div>
                    </div>
                  </div>
                </div>
                : null
              }

              { 
                this.state.viewSelection == 4 ?  
                <div className="row container-fluid my-4 mx-3">
                  <div className="row container-fluid">
                    <div className="col-md-12 form-group">
                      <div className="col-md-12" style={{textAlign:"center"}}>
                        <div className="col">
                          <p className="Title my-3" style={{textAlign:"center"}}>ETH address</p>
                          <input type="text" className="editor-input" placeholder="Text" style={{width:"70%"}}/>
                        </div>
                        
                        <div className="col-md-12 form-group my-4">
                          <div className="row">
                            <div className="col-md-6" style={{textAlign:"center"}}>
                              <button className="editor-btn main big" style={{width:"100%"}}><img src={window.location.origin + '/assets/images/icon_checklist.png'} /> Whitelist user</button> 
                            </div>
                            <div className="col-md-6" style={{textAlign:"center"}}>
                              <button className="editor-btn main big" style={{width:"100%"}}><h style={{fontWeight:"bold", fontSize:"25px"}}>?</h> Is user whitelisted</button> 
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                : null
              }
            </div>
          </div>
        </Modal>

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

export default Tokens;
