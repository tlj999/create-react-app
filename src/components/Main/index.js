import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Tab from '../Tab';
import Home from '../../pages/Home';
import Video from '../../pages/Video';
import Article from '../../pages/Article';
import UserCenter from '../../pages/UserCenter';

class Main extends React.Component{
  
  render(){
    return (
      <div>
        <div style={{margin:'0 0 50px 0'}}>
          <Switch>
            <Route exact path="/dashboard/" component={Home} />
            <Route path="/dashboard/video" component={Video} />
            <Route path="/dashboard/article" component={Article} />
            <Route path="/dashboard/userCenter" component={UserCenter} />
          </Switch> 
        </div>
        
        <Tab/>
      </div>
        
    )
  }
}
export default Main;