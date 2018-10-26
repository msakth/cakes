import React from 'react';
import {Link} from 'react-router-dom';
import CakeRowComponent from './cakeRowComponent';

import '../styles/cakeList.css';


class CakeListComponent extends React.Component {

    getCakes = (cakes = []) => cakes.map( (cake, index) => <CakeRowComponent key={index} cake={cake} />);   

    render() {

        const cakeRows = this.getCakes(this.props.cakes)
        
        return(
                <React.Fragment>
                    <div>
                        <Link className="btn btn-primary" to="/newcake/">Add New Cake</Link>
                        
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

export default CakeListComponent;