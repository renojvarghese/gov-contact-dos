import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer } from './reducers';
import { Provider } from 'react-redux';

Provider.childContextTypes = {
  store: React.PropTypes.object
};

const render = () => {
  ReactDOM.render(
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};
store.subscribe(render);
render();
registerServiceWorker();
