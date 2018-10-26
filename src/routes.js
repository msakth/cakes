import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

import CakeListContainer from './containers/cakeListContainer.jsx';
import CakeComponent from './components/cakeComponent.jsx';

const Routes = ({store}) => (
    <Provider store={store}>
        <Router>
            <div className="container">        
                <Route exact path="/" component={CakeListContainer} />
                <Route exact path="/newcake/" component={CakeComponent} />        
            </div>
    </Router>
  </Provider>
)

Routes.propTypes = {
    store: PropTypes.object.isRequired
}


export default Routes
