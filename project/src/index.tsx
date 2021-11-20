import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './moks/offers';
import { reviews } from './moks/reviews';

const Setting = {
  OFFERS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offers = { offers }
      reviews = { reviews }
      offersCount = { Setting.OFFERS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
