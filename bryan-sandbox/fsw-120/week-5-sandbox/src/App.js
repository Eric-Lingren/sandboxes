import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css';
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Register from './components/register/Register'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/register' component={Register} />
      </Switch>
      
    </div>
  );
}

export default App;
