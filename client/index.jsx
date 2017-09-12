import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import App from './components/App';

import store, { history } from './store';

render((
  <Provider store={store} >
    <ConnectedRouter history={history} >
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('app'));
