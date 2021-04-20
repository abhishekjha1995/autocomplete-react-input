import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CharacterListing from './components/pages/characterListing';
import store from './services/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CharacterListing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
