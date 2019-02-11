import React from 'react';
import SmurfForm from './SmurfForm';

import { connect } from 'react-redux';
import { selectSmurf, deleteSmurf } from '../../actions';

const Smurf = props => {
  return (
    <div 
      className="smurf-card" 
      onClick={props.selected !== props.smurf.id ? () => props.selectSmurf(props.smurf.id) : null}
    >
      {props.selected === props.smurf.id ? 
        <SmurfForm smurf={props.smurf} selected /> :
        <p>{props.smurf.name}</p>
      }
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete Smurf</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selected: state.selectedID
  }
}

export default connect(mapStateToProps, { selectSmurf, deleteSmurf })(Smurf);