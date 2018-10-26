import React from 'react';
import '../styles/cakeList.css';

class CakeRowComponent extends React.Component {
    render() {
        
        const {cake} = this.props;
        return(
            <React.Fragment>
                <tr>
                    <td>{cake.name}</td>
                    <td>{cake.imageUrl}</td>                   
                    
                </tr>
            </React.Fragment>
        );
    }
}

export default CakeRowComponent;