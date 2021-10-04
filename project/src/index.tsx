import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Lib = {
  RentsOffer: 132333,
};

ReactDOM.render(
  <React.StrictMode>
    <App countOffer={Lib.RentsOffer}/>
  </React.StrictMode>,
  document.getElementById('root'));
