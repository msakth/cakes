import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/cake.css';

class CakeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', comment: '', yumFactor: '', imageUrl: '' }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCake(this.state);
  }

  handleOnChange = (event) => {
    const fieldName = event.target.name;
    if( fieldName === 'name' )  this.setState({name: event.target.value});
    if( fieldName === 'imageUrl' )  this.setState({imageUrl: event.target.value});    
    if( fieldName === 'comment' )  this.setState({comment: event.target.value});
    if( fieldName === 'yumFactor' )  this.setState({comment: event.target.value});    
  }

    render() {

      const{name, comment, yumFactor, imageUrl} = this.state;

        return(            
                <form onSubmit={this.handleSubmit}>                  
                    <div className="cakeadd">
                      <div className='panel panel-default'>
                        <div className="panel-heading">
                          <h2 className="panel-title">Add New Cake</h2>
                        </div>
                      <div className="panel-body">
                       
                          <div className="col-xs-12 col-sm-6">
                              <label htmlFor="name">Name</label>
                              <input id="name" name="name" className="form-control" value={name} onChange={this.handleOnChange}  type="text" required />                         
                          </div>

                          <div className="col-xs-12 col-sm-6">
                              <label htmlFor="imageUrl">ImageUrl</label>
                              <input id="imageUrl" name="imageUrl" className="form-control" value={imageUrl} onChange={this.handleOnChange}  type="text" required />                             
                          </div>

                           <div className="col-xs-12 col-sm-6">
                              <label htmlFor="yumFactor">YumFactor</label>
                              <select id="yumFactor" name="yumFactor" className="form-control" value={yumFactor} onChange={this.handleOnChange} required>
                              {/* ToDoMS: use seperate function to create these option values */}
                                <option value=''>Select</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                              </select>                              
                          </div>

                          <div className="col-xs-12 col-sm-6">
                              <label htmlFor="comment">Comment</label>
                              <textarea id="comment" name="comment" className="form-control" type="text" value={comment} onChange={this.handleOnChange} required/>
                          </div>
                         
                        </div>
                        <div className="cakeadd--button">
                          <button className="btn btn-primary" type="submit">Submit</button>
                        </div>                         
                      </div>                   
                  </div>
                </form>
              );
        
    }
}

export default withRouter(CakeComponent);
