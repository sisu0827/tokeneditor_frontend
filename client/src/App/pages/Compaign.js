import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaIcon from 'react-fa-icon';
import Modal                from 'react-modal';
import Select from 'react-select';
import Dropdown from 'react-dropdown';
import Switch from 'react-toggle-switch';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CountrySelect from "react-country-select";

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
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
const countryoptions = [
  { value: 'United State', label: 'UnitedState' },
  { value: 'United Kingdom', label: 'UnitedKingdom' },

];
const options1 = [
  'one', 'two', 'three'
];
const options2 = [
  'United State', 'United Kingdom', 'England'
];
const options3 = [
  'chocolate', 'strawberry', 'vanilla'
];
const defaultOption = options1[0];
Modal.setAppElement('#modal')

class Compaign extends Component {

    propTypes : {
        onSelect: React.PropTypes.func
    }

  constructor(props) {
    super(props)
    this.state = {  showHideSidenav   : "",
                    modalIsOpen       : false,
                    selectedOption: null,
                    selectedcountryOption: null,
                    modal2IsOpen       : false,
                    modal3IsOpen       : false,
                    modal4IsOpen       : false,
                    modal5IsOpen       : false,
                    modal6IsOpen       : false,
                    switched: false,
                    country: '', 
                    region: '',
                    tag: null,
                    tagcountry: null
    };

    this.onSelect = this.onSelect.bind(this);
    this.onSelectCountry = this.onSelectCountry.bind(this);
    this.openModal        = this.openModal.bind(this);
    this.afterOpenModal   = this.afterOpenModal.bind(this);
    this.closeModal       = this.closeModal.bind(this);
    this.open2Modal        = this.open2Modal.bind(this);
    this.after2OpenModal   = this.after2OpenModal.bind(this);
    this.close2Modal       = this.close2Modal.bind(this); 
    this.open3Modal        = this.open3Modal.bind(this);
    this.after3OpenModal   = this.after3OpenModal.bind(this);
    this.close3Modal       = this.close3Modal.bind(this); 
    this.open4Modal        = this.open4Modal.bind(this);
    this.after4OpenModal   = this.after4OpenModal.bind(this);
    this.close4Modal       = this.close4Modal.bind(this); 
    this.open5Modal        = this.open5Modal.bind(this);
    this.after5OpenModal   = this.after5OpenModal.bind(this);
    this.close5Modal       = this.close5Modal.bind(this); 
    this.open6Modal        = this.open6Modal.bind(this);
    this.after6OpenModal   = this.after6OpenModal.bind(this);
    this.close6Modal       = this.close6Modal.bind(this);            
  }

  componentDidMount(){
    document.body.id="billing"
  }

  toggleSidenav() {
    var css = (this.state.showHideSidenav === "active") ? "" : "active";
    this.setState({"showHideSidenav":css, switched: false});
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
  open2Modal() {
    this.setState({modal2IsOpen: true});
  }
 
  after2OpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  close2Modal() {
    this.setState({modal2IsOpen: false});
  }
  open3Modal() {
    this.setState({modal3IsOpen: true});
  }
 
  after3OpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  close3Modal() {
    this.setState({modal3IsOpen: false});
  }
    open4Modal() {
    this.setState({modal4IsOpen: true});
  }
 
  after4OpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  close4Modal() {
    this.setState({modal4IsOpen: false});
  }
    open5Modal() {
    this.setState({modal5IsOpen: true});
  }
 
  after5OpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  close5Modal() {
    this.setState({modal5IsOpen: false});
  }
    open6Modal() {
    this.setState({modal6IsOpen: true});
  }
 
  after6OpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  close6Modal() {
    this.setState({modal6IsOpen: false});
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log('Option selected:', selectedOption);
  }
  countryhandleChange = (selectedcountryOption) => {
    this.setState({ selectedcountryOption });
    console.log('Option selected:', selectedcountryOption);
  }
  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };
  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }  

  onSelect(val) {
    console.log("values selected are:", val);
    //you can handle options selected here.
  }
  onSelectCountry(val) {
    console.log("values selected are:", val);
    //you can handle options selected here.
  }

  render() {
    const { FaIcon, FaStack } = require('react-fa-icon');
    const { selectedOption } = this.state;
    const { selectedcountryOption } = this.state;
    const { country, region } = this.state;
    return (
      <div className="wrapper">
        <nav id="sidebar" className={this.state.showHideSidenav}>
            <div className="sidebar-header">
                <h5><img width="25%" height="25%" src="https://i.imgur.com/sMK1rIY.png" /><a href="/dashboard">Token Editor</a></h5>
            </div>

            <ul className="list-unstyled">
                <li>
                    <a href="/step1"><i className="fab fa-lg fa-ethereum"></i> Generate</a>
                </li>
                <li>
                    <a href="/Tokens"><i className="fas fa-lg fa-coins"></i> Tokens</a>
                </li>
                <li className="selected-li">
                    <a href="compaignsetup"><i className="fas fa-lg fa-sign"></i> Campaigns</a>
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

            <div className="container-fluid col-md-12">

              <div className="row justify-content-center">
                <h2 className="text-uppercase">Campaigns</h2>
              </div>
              &nbsp;
              <div className="row my-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="editor-btn main big" onClick={this.openModal}><i className="fa fa-plus-circle"></i>&nbsp;&nbsp; New</button>
              </div>
              <div className="row my-4 text-center">
                <div className="col col-md-12 justify-content-center">
                  <div className="row justify-content-center" >
                  <div className="row settingeditor-block">
                    <div className="col col-md-9  my-3">
                      <div className="row col">
                        <p className="m-0">&nbsp;&nbsp;&nbsp;Example campaign</p>
                        <div className="col-md-1"></div>
                        <div className="row compaignbtngroup-block">
                          <div className="compaignbtnleft"><i className="fas fa-eye"></i></div>
                          <div className="compaignbtnright">View</div>
                        </div>
                        <div className="col-md-1"></div><Link to={'/ManageCampaign'}>
                          <div className="row compaignbtngroup-block">
                            <div className="compaignbtnleft"><i className="fas fa-pencil-alt"></i></div>
                            <div className="compaignbtnright">Manage</div>
                          </div>
                        </Link>
                        <div className="col-md-1"></div>
                        <div className="row compaignbtngroup-block">
                          <div className="compaignbtnleft"><i className="fa fa-code"></i></div>
                          <div className="compaignbtnright">Embed</div>
                        </div>
                        
                      </div>
                      <div className="row col">
                        <div className="col">
                          <p className="text-muted">by Oleh</p>
                        </div>
                      </div>
                      <div className="row col">
                        <div className="col my-2">
                          <p className="m-0 mb-1">Raised persent: 10%</p>
                          <div className="progress">
                            <span></span>
                          </div>
                        </div>
                      </div>
                      <div className="row col">
                        <div className="col">
                          <p className="font-weight-bold m-0">60 ETH</p>
                          <p className="text-muted">Funding goal</p>
                        </div>
                        <div className="col">
                          <p className="font-weight-bold m-0">6 ETH</p>
                          <p className="text-muted">Fund Raised</p>
                        </div>
                        <div className="col">
                          <p className="font-weight-bold m-0">54</p>
                          <p className="text-muted">Days to go</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="compaign-img"></div>
                    </div>
                  </div>
                  </div>
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
                          <p className="Title" style={{textAlign:"right"}}>New Campaigns 1 Step</p>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="col-md-12">
                          <button style = {buttonStyle} 
                            onClick={this.closeModal}
                            type="button" 
                            aria-label="close"
                          >
                            <p style={{textAlign:"center"}}>CLOSE</p>
                          </button>                      
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="container my-5">
                <div className="container my-5">
                </div>
                <div className="row text-center my-5">
                  <div className="row justify-content-center col-md-12 my-4">
                    
                      <div className="row btngroup-block text-uppercase">
                        <div className="titleleft">step 1/6</div>
                        <div className="titleright">compaignsetup</div>
                      </div>
                  </div>
                  <div className="w-100 my-2"></div>
                  <div className="col" align="center">
                    <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                      <div className="col-md-5 form-group">
                        <p>Title <img src="assets/images/question_mark.png" /></p>
                        <input type="text" className="editor-input w-100" placeholder="Text" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-5 form-group">
                        <p>Category <img src="assets/images/question_mark.png" /></p>
                        <Dropdown options={options3} onChange={this._onSelect} placeholder="Select an option"/>
                      </div>
                      <div className="w-100"></div>

                      <div className="col-md-5 form-group">
                        <p>Tag <img src="assets/images/question_mark.png" /></p>
                        <input type="text" className="editor-input w-100" placeholder="Text" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-5 form-group">
                        <p>Country <img src="assets/images/question_mark.png" /></p>
                        <CountryDropdown
                            value={country}
                            onChange={(val) => this.selectCountry(val)} classes="col-md-12 Dropdown-control" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-5 form-group">
                        <p>Token <img src="assets/images/question_mark.png" /></p>
                        <Dropdown options={options1} onChange={this._onSelect} placeholder="Select an option"/>
                      </div>
                      <div className="w-100"></div>
                      <div className="col col-md-4 form-group my-3">
                        <a onClick={this.closeModal} className="mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/continue.png" onClick={this.open2Modal}/>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>              
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={this.state.modal2IsOpen}
          onAfterOpen={this.afterOpen2Modal}
          onRequestClose={this.close2Modal}
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
                          <p className="Title" style={{textAlign:"right"}}>New Campaigns 2 Step</p>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="col-md-12">
                          <button style = {buttonStyle} 
                            onClick={this.close2Modal}
                            type="button" 
                            aria-label="close"
                          >
                            <p style={{textAlign:"right"}}>CLOSE</p>
                          </button>                      
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="container my-5">
                <div className="container my-5">
                </div>
                <div className="row text-center my-5">
                  <div className="row justify-content-center col-md-12 my-4">
                    
                      <div className="row btngroup-block text-uppercase">
                        <div className="titleleft">step 2/6</div>
                        <div className="titleright">summary</div>
                      </div>
                  </div>
                  <div className="w-100 my-2"></div>
                  <div className="col" align="center">
                    <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                      <div className="col-md-6 form-group">
                        <p>Description <img src="assets/images/question_mark.png" /></p>
                        <textarea className="editor-input w-100" rows="10" placeholder="Text" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-6 form-group">
                        <p>Short Description <img src="assets/images/question_mark.png" /></p>
                        <textarea className="editor-input w-100" rows="8" placeholder="Text" />
                      </div>
                      <div className="w-100"></div>
                      <div className="row form-group my-3 col-md-7">
                        <a onClick={this.close2Modal} className="col mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/back.png"  onClick={this.openModal}/>
                        </a>
                        <div className="col-md-1" ></div>
                        <a onClick={this.close2Modal} className="col mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/continue1.png" onClick={this.open3Modal}/>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>             
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.modal3IsOpen}
          onAfterOpen={this.afterOpen3Modal}
          onRequestClose={this.close3Modal}
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
                          <p className="Title" style={{textAlign:"right"}}>New Campaigns 3 Step</p>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="col-md-12">
                          <button style = {buttonStyle} 
                            onClick={this.close3Modal}
                            type="button" 
                            aria-label="close"
                          >
                            <p style={{textAlign:"center"}}>CLOSE</p>
                          </button>                      
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="panel-body">
              <div className="container my-5">
                <div className="container my-5">
                </div>
                <div className="row text-center my-5">
                  <div className="row justify-content-center col-md-12 my-4">
                    
                      <div className="row btngroup-block text-uppercase">
                        <div className="titleleft">step 3/6</div>
                        <div className="titleright">media</div>
                      </div>
                  </div>
                  <div className="w-100 my-2"></div>
                  <div className="col" align="center">
                    <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                      <div className="col-md-7 form-group">
                        <p>Image <img src="assets/images/question_mark.png" /></p>
                        <div className="row form-group">
                          &nbsp;&nbsp;&nbsp;<input type="text" className="editor-input-custom col-md-9 col" placeholder="Text" />
                          <div class="upload-btn-wrapper col">
                            <button class="fileselectbtn">Upload</button>
                            <input type="file" name="myfile" />
                          </div>
                        </div>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-7 form-group">
                        <p>Whitepaper <img src="assets/images/question_mark.png" /></p>
                        <div className="row form-group">
                          &nbsp;&nbsp;&nbsp;<input type="text" className="editor-input-custom col-md-9 col" placeholder="Text" />
                          <div class="upload-btn-wrapper col">
                            <button class="fileselectbtn">Upload</button>
                            <input type="file" name="myfile" />
                          </div>
                        </div>
                      </div>
                      <div className="w-100"></div>

                      <div className="col-md-7 form-group">
                        <p>Video <img src="assets/images/question_mark.png" /></p>
                        <input type="text" className="editor-input w-100" placeholder="Text" />
                      </div>
                      <div className="w-100"></div>
                      <div className="row form-group my-3 col-md-7">
                        <a onClick={this.close3Modal} className="col mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/back.png"  onClick={this.open2Modal}/>
                        </a>
                        <div className="col-md-1"></div>
                        <a onClick={this.close3Modal} className="col mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/continue1.png" onClick={this.open4Modal}/>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>             
            </div>
          </div>
        </Modal>     
         <Modal
          isOpen={this.state.modal4IsOpen}
          onAfterOpen={this.afterOpen4Modal}
          onRequestClose={this.close4Modal}
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
                          <p className="Title" style={{textAlign:"right"}}>New Campaigns 4 Step</p>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="col-md-12">
                          <button style = {buttonStyle} 
                            onClick={this.close4Modal}
                            type="button" 
                            aria-label="close"
                          >
                            <p style={{textAlign:"center"}}>CLOSE</p>
                          </button>                      
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="container my-5">
                <div className="container my-5">
                </div>
                <div className="row text-center my-5">
                  <div className="row justify-content-center col-md-12 my-4">
                      <div className="row btngroup-block text-uppercase">
                        <div className="titleleft">step 4/6</div>
                        <div className="titleright">funding</div>
                      </div>
                  </div>
                  <div className="w-100 my-2"></div>
                  <div className="col" align="center">
                    <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                      <div className="row col-md-12 form-group">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                          <p>Start Date <img src="assets/images/question_mark.png" /></p>
                          <input type="text" className="editor-input w-100" placeholder="Text" />
                        </div>
                        <div className="col-md-5">
                          <p>End Date <img src="assets/images/question_mark.png" /></p>
                          <input type="text" className="editor-input w-100" placeholder="Text" />
                        </div>
                        <div className="col-md-1"></div>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-5 form-group">
                        <p>Funding Goal <img src="assets/images/question_mark.png" /></p>
                        <input type="text" className="editor-input w-100" placeholder="Text" />
                      </div>
                      <div className="w-100"></div>              
                      <div className="col-md-5 form-group">
                        <p>Minimum Account <img src="assets/images/question_mark.png" /></p>
                        <input type="text" className="editor-input w-100" placeholder="Text" />
                      </div>
                      <div className="w-100"></div>

                      <div className="col-md-5 form-group">
                        <p>Recomended Account <img src="assets/images/question_mark.png" /></p>
                        <input type="text" className="editor-input w-100" placeholder="Text" />
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-5 form-group">
                        <p>Contributor Table <img src="assets/images/question_mark.png" /></p>
                        <div className="row">
                          <input type="checkbox" className="check-block col-md-1"/>
                          <div className="col-md-11" align="left">Show Contributor table on Campaign single page</div>
                        </div>
                        
                      </div>
                      <div className="w-100"></div>              
                      <div className="row form-group my-3 col-md-7">
                        <a onClick={this.close4Modal} className="col mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/back.png"  onClick={this.open3Modal}/>
                        </a>
                        <div className="col-md-1"></div>
                        <a onClick={this.close4Modal} className="col mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/continue1.png" onClick={this.open5Modal}/>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>             
            </div>
          </div>
        </Modal>    


         <Modal
          isOpen={this.state.modal5IsOpen}
          onAfterOpen={this.afterOpen5Modal}
          onRequestClose={this.close5Modal}
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
                          <p className="Title" style={{textAlign:"right"}}>New Campaigns 5 Step</p>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="col-md-12">
                          <button style = {buttonStyle} 
                            onClick={this.close5Modal}
                            type="button" 
                            aria-label="close"
                          >
                            <p style={{textAlign:"center"}}>CLOSE</p>
                          </button>                      
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="container my-5">
                <div className="container my-5">
                </div>
                <div className="row text-center my-5">
                  <div className="row justify-content-center col-md-12 my-4">
                      <div className="row btngroup-block text-uppercase">
                        <div className="titleleft">step 5/6</div>
                        <div className="titleright">Kyc/Aml</div>
                      </div>
                  </div>
                  <div className="w-100 my-2"></div>
                  <div className="col">
                    <form className="row justify-content-center" onSubmit={this.handleSubmit}>

                      <div className="col-md-6 form-group">
                        <p>Filter by <img src="assets/images/question_mark.png" /></p>
                        <div className="row justify-content-center">
                          Banned<span className="span-space"/> 
                            <Switch onClick={this.toggleSwitch} on={this.state.switched}/>
                          <span className="span-space"/>
                          Allowed Countries
                        </div>
                      </div>
                      <div className="w-100"></div>              
                      <div className="col-md-5 form-group">
                        <p>Allowed Countries <img src="assets/images/question_mark.png" /></p>
                        <CountrySelect multi={true} flagImagePath="./assets/images/flags/" onSelect={this.onSelect}/>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-5 form-group">
                        <p>Required before investing <img src="assets/images/question_mark.png" /></p>
                        <div className="row justify-content-center">
                          <input type="checkbox" className="check-block"/>
                          &nbsp;&nbsp;Yes
                        </div>
                        
                      </div>
                      <div className="w-100"></div>              
                      <div className="row form-group my-3 col-md-7">
                        <a onClick={this.close5Modal} className="col mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/back.png"  onClick={this.open4Modal}/>
                        </a>
                        <div className="col-md-1"></div>
                        <a onClick={this.close5Modal} className="col mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/continue1.png" onClick={this.open6Modal}/>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>             
            </div>
          </div>
        </Modal>
         <Modal
          isOpen={this.state.modal6IsOpen}
          onAfterOpen={this.afterOpen6Modal}
          onRequestClose={this.close6Modal}
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
                          <p className="Title" style={{textAlign:"right"}}>New Campaigns 6 Step</p>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="col-md-12">
                          <button style = {buttonStyle} 
                            onClick={this.close6Modal}
                            type="button" 
                            aria-label="close"
                          >
                            <p style={{textAlign:"right"}}>CLOSE</p>
                          </button>                      
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="container my-5">
                <div className="container my-5">
                </div>
                <div className="row text-center my-5">
                  <div className="row justify-content-center col-md-12 my-4">
                      <div className="row btngroup-block text-uppercase">
                        <div className="titleleft">step 6/6</div>
                        <div className="titleright">save</div>
                      </div>
                  </div>
                  <div className="w-100 my-2"></div>
                  <div className="col" align="center">
                    <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                      <div className="col-md-8 form-group">
                        <p>Term and Conditions <img src="assets/images/question_mark.png" /></p>
                        <textarea className="editor-input w-100" rows="15" placeholder="Text" readonly="true">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum metus felis, eu lobortis nisi vestibulum facilisis. Duis vestibulum, augue vitae feugiat sollicitudin, nibh dui tempor diam, quis tristique justo ante vel nulla. Curabitur rutrum sit amet mi id auctor. Nunc pellentesque, sem quis tincidunt semper, massa ligula venenatis enim, nec euismod turpis tellus quis libero. Duis ullamcorper ullamcorper ullamcorper. Nam eget dictum enim. Donec vitae enim non ipsum dapibus tempus a quis mi. Maecenas nec fringilla eros. Suspendisse et sem hendrerit, tempus lorem vel, mollis neque. Praesent viverra, ligula vel consectetur iaculis, odio orci bibendum erat, in blandit ante ipsum non tortor. Nunc vel orci rutrum, vehicula ex quis, fringilla risus.

                          Pellentesque varius augue id mollis mollis. Vivamus in purus dolor. Aliquam dignissim pulvinar eros sollicitudin fermentum. Cras dapibus fringilla lorem, sed facilisis lacus efficitur eu. Curabitur sem purus, pellentesque ac tempus quis, semper ac libero. Nulla facilisi. Maecenas congue tincidunt purus non placerat. Aliquam ante metus, vestibulum ac vestibulum nec, dictum vel dui.

                          Quisque et massa at erat tincidunt posuere. Morbi placerat nisi sapien, vel iaculis dui posuere eu. Vivamus vel finibus ipsum, non pharetra odio. Nulla eget est sed enim lacinia elementum. Curabitur euismod nisl eget dolor dapibus, in condimentum enim blandit. Pellentesque pulvinar ornare posuere. Integer porttitor placerat ligula, sed congue mi porta vel. Integer sit amet diam lectus. Quisque a varius dui. Suspendisse odio enim, ultricies eget aliquam eget, commodo a mauris. Sed mollis eu diam at ultrices.
                        </textarea>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-md-8 form-group">
                         <div className="row justify-content-center">
                          <input type="checkbox" className="check-block"/>
                          &nbsp;&nbsp;I agree with the terms and conditions
                        </div>
                      </div>                      
                      <div className="w-100"></div>              
                      <div className="w-100"></div>              
                      <div className="row form-group my-3 col-md-8 justify-content-center">
                        <a onClick={this.close6Modal} className="mousepoint-change">
                          <div className="savekind-btn" onClick={this.openModal}>1</div>
                        </a> &nbsp;&nbsp;
                        <a onClick={this.close6Modal} className="mousepoint-change">
                          <div className="savekind-btn" onClick={this.open2Modal}>2</div>
                        </a> &nbsp;&nbsp;
                        <a onClick={this.close6Modal} className="mousepoint-change">
                          <div className="savekind-btn" onClick={this.open3Modal}>3</div>
                        </a> &nbsp;&nbsp;
                        <a onClick={this.close6Modal} className="mousepoint-change">
                          <div className="savekind-btn" onClick={this.open4Modal}>4</div>
                        </a> &nbsp;&nbsp;
                        <a onClick={this.close6Modal} className="mousepoint-change">
                          <div className="savekind-btn" onClick={this.open5Modal}>5</div>
                        </a> &nbsp;&nbsp;

                        <a onClick={this.close6Modal} className="form-group col col-md-4 mousepoint-change">
                          <img height="50px" width="100%" src="assets/images/save_btn.png" onClick={this.open6Modal}/>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>             
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
export default Compaign;
