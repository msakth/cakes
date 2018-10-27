import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/cakeList.css';

class CakeRowComponent extends React.PureComponent {
    render() {
        
        const {cake} = this.props;
        return(
            <React.Fragment>
                <tr>
                    <td><Link to={`/viewcake/${cake.id}`}>{cake.name}</Link></td>
                    <td>{cake.imageUrl}</td>                   
                    
                </tr>
            </React.Fragment>
        );
    }
}

export default CakeRowComponent;