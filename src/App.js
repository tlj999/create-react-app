import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from './pages/Login';
import Main from './components/Main';
import Profile from './pages/Profile';
import WannaDo from './pages/WannaDo';
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/dashboard' component={Main}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/wannado' component={WannaDo}></Route>
          <Redirect to='/dashboard'></Redirect>
        </Switch>
      </div>
    );
  }
}

