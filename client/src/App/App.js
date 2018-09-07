import React, { Component }       from 'react';
import { Route, Switch }          from 'react-router-dom';
import                                 './App.css';
import Auth                       from './pages/Auth';
import Dashboard                  from './pages/Dashboard';
import Register                   from './pages/Register';
import Setting                    from './pages/Setting';
import Billing                    from './pages/Billingupdate';
import Transactions               from './pages/Transactions';
import Affiliate                  from './pages/Affiliate';
import KycAml                     from './pages/KycAml';
import Tokens                     from './pages/Tokens';
import ManageCampaign             from './pages/ManageCampaign';
import Compaign                   from './pages/Compaign';
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Auth}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/Transactions' component={Transactions}/>
          <Route path='/Affiliate' component={Affiliate}/>
          <Route path='/KycAml' component={KycAml}/>
          <Route path='/register' component={Register}/>
          <Route path='/setting' component={Setting}/>
          <Route path='/billing' component={Billing}/>
          <Route path='/Tokens' component={Tokens}/>
          <Route path='/ManageCampaign' component={ManageCampaign}/>
          <Route path='/compaign' component={Compaign}/> 
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
