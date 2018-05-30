import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer } from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducer);
Provider.childContextTypes = {
  store: PropTypes.object.isRequired,
  storeSubscription: PropTypes.object
};

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};
render();
registerServiceWorker();
