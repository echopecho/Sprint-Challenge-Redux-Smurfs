import React from 'react';
import Smurf from './Smurf';  

import { connect } from 'react-redux';


const SmurfList = props => {
  return (
    <div>
      {props.loading ? <h2>Loading...</h2> : null}
      {props.error ? <h2>{props.error}</h2> : null}
      {props.smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
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