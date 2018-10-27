import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

import CakeListContainer from './containers/cakeListContainer.jsx';
import CakeContainer from './containers/cakeContainer.jsx';
import CakeViewContainer from './containers/cakeViewContainer.jsx';

const Routes = ({store}) => (
    <Provider store={store}>
        <Router>
            <div className="container">        
                <Route exact path="/" component={CakeListContainer} />
                <Route exact path="/newcake/" component={CakeContainer} />
                <Route exact path="/viewcake/:id" component={CakeViewContainer} />        
            </div>
        </Router>
  </Provider>
)

Routes.propTypes = {
    store: PropTypes.object.isRequired
}


export default Routes
