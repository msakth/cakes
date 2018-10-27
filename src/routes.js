import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

import CakeListContainer from './containers/cakeListContainer.jsx';
import CakeContainer from './containers/cakeContainer.jsx';

const Routes = ({store}) => (
    <Provider store={store}>
        <Router>
            <div className="container">        
                <Route exact path="/" component={CakeListContainer} />
                <Route exact path="/newcake/" component={CakeContainer} />        
            </div>
        </Router>
  </Provider>
)

Routes.propTypes = {
    store: PropTypes.object.isRequired
}


export default Routes
