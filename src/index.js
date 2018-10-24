import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App.jsx';



const renderComponent = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
     document.getElementById('root')
  );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderComponent(App);
  });
}
