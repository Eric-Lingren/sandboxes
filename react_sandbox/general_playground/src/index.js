import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
// import UserProvider from "./Context/UserProvider.js"
import './App.css'
import ProductProvider from './Context/ProductProvider.js'

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      {/* <UserProvider> */}
          
            <App/>
          
        {/* </UserProvider> */}
      </ProductProvider>
  </BrowserRouter>,

  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
