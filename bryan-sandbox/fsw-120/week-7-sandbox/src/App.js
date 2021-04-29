import React, {useEffect} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import {withUser} from './providers/UserProvider'
import ProtectedRoute from './shared/ProtectedRoute'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TweetsList from './components/TweetsList'
import Login from './components/Login'

const App = ({getToken}) => {

  useEffect(()=>{
    getToken()
  }, [getToken] )


  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <ProtectedRoute exact path='/tweets' component={TweetsList} />
      </Switch>
    </div>
  );
}

export default withUser(App)
