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
            <div className="container-fluid px-md-5 col-md-9 justify-content-center">
              <div className="mx-3 my-5 col-md-12" style={{width:"95%"}}>
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
                  <div className="panel-body-campaign">
                    <div className="row" style={{color:"white"}}>
                      <div className="col-md-4">
                        <div className="row text-center align-items-center">
                          <div className="col my-3">
                            <p className="Amount">60 ETH</p>
                            <p className="Title">Funding goal</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="row text-center align-items-center">
                          <div className="col my-3">
                            <p className="Amount">6 ETH</p>
                            <p className="Title">Fund Raised</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="row text-center align-items-center">
                          <div className="col my-3">
                            <p className="Amount">54</p>
                            <p className="Title">Days to go</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center" style={{color:"white"}}>
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
                          <button className="editor-btn main big my-5" style={{backgroundColor:"white", color:"rgb(69, 70, 123)"}}><img src={window.location.origin + '/assets/images/icon_invest.png'} /> Invest</button> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="text-center">
                  <p className="Amount my-0">Token address</p>
                  <p className="Title my-0" style={{color:"rgb(196, 191, 191)"}}>Click to check in etherscan.io</p>
                  <div className="row justify-content-center">
                    <label className="editor-btn link big" for="male" style={{backgroundColor:"white", color:"rgb(69, 70, 123)", fontWeight:"bold"}}>https://etherscan.io/token/0x57c9356fc44068</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center my-5">
              <div className="col-md-12">
                <div className="text-center">
                  <p className="Amount">Whitepaper</p>
                  <button className="editor-btn main big"><img src={window.location.origin + '/assets/images/icon_read.png'} /> Read</button> 
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="container-fluid px-md-5 col-md-11">
                <div className="text-center">
                  <p className="Amount">Description</p>
                </div>
                <div className="text-left" style={{marginLeft:"5%"}}>
                  
                  <p style={{textalign:"left"}}>Lorem ipsum dolor site amet, consectetur aidpiscing elit. Fusc interdum metus felis, eu lobortis nisi vestibulum</p>
                  <p style={{textalign:"left"}}>facilisis. Duis vestibulum, augue vitae feugiat sollicitudin, nibh dui tempor diam, quis tristique justo ante vel nulla. </p>
                  <p>Curabitur rutrum sit amet mi id auctor. Nunc pellentesque, sem quis tincidunt semper, massa ligula venenatis enim,</p>
                  <p>nec euismod turpis tellus quis libero. Duis ullamcorper ullamcorper ullamcorper. Nam eget dictum enim. Donec</p>
                  <p>vitae enim non ipsum dapibus tempus a quis mi. Maecenas nec fringilla eros. Suspendisse et sem hendrerit, tempus </p>
                  <p>lorem vel, mollis neque. Praesent viverra, ligula vel consectetur iaculis, odio orci bibendum erat, in blandit ante </p>
                  <p>ipsum non tortor. Nunc vel orci rutrum, vehicula ex quis, fringilla risus.</p>
                  <br/>
                  <p>Pellentesque varius augue id mollis mollis. Vivamus in purus dolor. Aliquam dignissim pulvinar eros sollicitudin </p>
                  <p>fermentum. Cras dapibus fringilla lorem, sed facilisis lacus efficitur eu. Curabitur sem purus, pellentesque ac </p>
                  <p>tempus quis, semper ac libero. Nulla facilisi. Maecenas congue tincidunt purus non placerat. Aliquam ante metus, </p>
                  <p>vestibulum ac vestibulum nec, dictum vel dui.</p>
                  <br/>
                  <p>Quisque et massa at erat tincidunt posuere. Morbi placerat nisi sapien, vel iaculis dui posuere eu. Vivamus vel </p>
                  <p>finibus ipsum, non pharetra odio. Nulla eget est sed enim lacinia elementum. Curabitur euismod nisl eget dolor </p>
                  <p>dapibus, in condimentum enim blandit. Pellentesque pulvinar ornare posuere. Integer porttitor placerat ligula, sed </p>
                  <p>congue mi porta vel. Integer sit amet diam lectus. Quisque a varius dui. Suspendisse odio enim, ultricies eget </p>
                  <p>aliquam eget, commodo a mauris. Sed mollis eu diam at ultrices.</p>
                  <br/>
                  <p>Duis pulvinar tincidunt tellus, et pretium orci malesuada nec. Donec finibus massa ex, faucibus tincidunt magna </p>
                  <p>commodo a. Etiam et condimentum orci, sit amet blandit risus. Ut lobortis tortor ut lectus bibendum pellentesque. </p>
                  <p>Vivamus mi dui, congue vel imperdiet in, hendrerit nec felis. Donec euismod mauris vitae erat aliquam gravida. In </p>
                  <p>nunc magna, molestie eget justo at, tincidunt vehicula libero. In eu ex viverra, facilisis tortor viverra, tempor leo. </p>
                  <p>In velit ipsum, tempus vel viverra id, porta a ligula. Ut nibh sem, tincidunt vel rhoncus nec, iaculis quis arcu. </p>
                  <p>Nullam at lobortis elit, eget malesuada urna.</p>
                  <br/>
                  <p>Fusce vel eros ut quam ornare convallis ut ac ligula. Quisque sed luctus erat. Donec maximus quis justo vitae </p>
                  <p>auctor. Vestibulum convallis porta sapien. Mauris lacus metus, tempor a pharetra quis, feugiat non nibh. Phasellus </p>
                  <p>lacus neque, eleifend vitae nibh et, scelerisque eleifend ante. Curabitur arcu ipsum, sagittis ut vulputate sit amet, </p>
                  <p>pretium sit amet nisi. Nunc hendrerit non justo ut convallis. Vivamus sollicitudin erat non ipsum gravida, sit amet </p>
                  <p>molestie lorem blandit. Nulla rutrum enim in elit pellentesque bibendum. Nunc vitae sollicitudin lorem, </p>
                  <p>eget pulvinar mauris. Pellentesque a maximus metus, id tempor metus. Curabitur vel lacus justo. Vivamus quis sem nec </p>
                  <p>enim euismod auctor vitae ac ante.</p>                  
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="row">
                <button className="editor-btn main big my-5"><img src={window.location.origin + '/assets/images/icon_invest_white.png'} /> Invest</button> 
                <button className="editor-btn main big my-5 mx-3"><img src={window.location.origin + '/assets/images/icon_gotohome.png'} /> Go to website</button> 
              </div>
            </div>
        </div>
    </div>
    );
  }
}
export default Affiliate;
