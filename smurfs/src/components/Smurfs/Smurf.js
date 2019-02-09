import React from 'react';
import SmurfForm from './SmurfForm';

import { connect } from 'react-redux';
import { selectSmurf } from '../../actions';

const Smurf = props => {
  return (
    <div onClick={props.selected !== props.smurf.id ? () => props.selectSmurf(props.smurf.id) : null}>
      {props.selected === props.smurf.id ? 
        <SmurfForm smurf={props.smurf} selected /> :
        <p>{props.smurf.name}</p>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selected: state.selectedID
  }
}

export default connect(mapStateToProps, { selectSmurf })(Smurf);