import React from 'react';
import '../styles/cake.css';
import {withRouter} from 'react-router-dom';

class CakeViewComponent extends React.PureComponent {

    handleBack = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }

    render() {

        const cake = this.props.fetchCake();

        return(
                <div className='panel panel-default'>
                    <div className="panel-heading">
                          <h2 className="panel-title">View Cake</h2>
                    </div>
                    <div className="panel-body">
                        
                        <div className="col-xs-12 col-sm-6">
                              <label htmlFor="name">Name</label>
                              <input id="name" name="name" className="form-control" type="text" value={cake.name} readOnly/>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                              <label htmlFor="comment">Comment</label>
                              <textarea id="comment" name="comment" className="form-control" type="text" value={cake.comment} readOnly/>
                        </div>
                          <button className="btn btn-primary" onClick={this.handleBack}>Back</button>
                    </div>
                </div>
        );
    }
}

export default withRouter(CakeViewComponent);