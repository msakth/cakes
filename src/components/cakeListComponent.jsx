import React from 'react';

import CakeRowComponent from './cakeRowComponent';
import { withRouter } from 'react-router-dom';
import '../styles/cakeList.css';


class CakeListComponent extends React.Component {

    getCakes = (cakes = []) => cakes.map( (cake, index) => <CakeRowComponent key={index} cake={cake} />);   

    navigateToAddCake = (event) => {
        event.preventDefault();
        this.props.history.push('/newcake/');
    }

    render() {

        const cakeRows = this.getCakes(this.props.cakes);
        
        return(
                <React.Fragment>
                    <div>
                        <button type='button' className="btn btn-primary" onClick={this.navigateToAddCake}>Add New Cake</button>        
                    </div>
                    <table id="cake">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ImageUrl</th>                                                        
                        </tr>
                    </thead>
                    <tbody>
                        {cakeRows}
                    </tbody>
                </table>
                
            </React.Fragment>                
        );
    }
}

export default withRouter(CakeListComponent);