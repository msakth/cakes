import React from 'react';
import '../styles/cake.css';

class CakeComponent extends React.Component {
    render() {
        return(            
                <form>
                  <React.Fragment>
                    <div className="cake--add">
                      <div className='panel panel-default'>
                        <div className="panel-heading">
                          <h2 className="panel-title">Add New Cake</h2>
                        </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-xs-12 col-sm-4">
                              <label htmlFor="stockSymbol">Stock Symbol</label>
                              <select id="stockSymbol" name="stockSymbol" className="form-control"  required>
                                
                              </select>
                          </div>
                          <div className="col-xs-12 col-sm-4">
                              <label htmlFor="price">Price</label>
                              <input id="price" name="price" className="form-control" type="text" pattern="^[1-9]\d*(\.\d+)?$"  required maxLength={10} />
                              <small className="form-text text-muted pull-left">must contain only numbers or decimal numbers</small>
                          </div>
                          <div className="col-xs-12 col-sm-4">
                              <label htmlFor="shares">No of shares</label>
                              <input id="shares" name="shares" className="form-control" type="text" pattern="[0-9]*"  required maxLength={10}/>
                              <small className="form-text text-muted pull-left">must contain only numbers</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </div>
          
                </React.Fragment>
              </form>
              );
        
    }
}

export default CakeComponent;
