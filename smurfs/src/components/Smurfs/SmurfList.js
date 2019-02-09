import React from 'react';
import Smurf from './Smurf';  

import { connect } from 'react-redux';


const SmurfList = props => {
  return (
    <div className="content-container">
      <div className="status-header">
        {props.loading ? <h2>Loading...</h2> : null}
        {props.error ? <h2>{props.error}</h2> : null}
      </div>
      <div className="smurf-list">
        {props.smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  )
} 

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(SmurfList);