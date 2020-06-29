import React from 'react';
import './App.css';
import NameForm from './name-badges/NameForm'

function App() {
  return (
    <div className="App">
      <h3> This is App.  It is a functional component</h3>
      <NameForm name='my name'/>
    </div>
  );
}

export default App;
