import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ErrorBoundary } from './components';
import './index.css';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  const Routes = require('./routes').default;
  render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept('./routes/index', () => {
    renderApp();
  });
}
renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
