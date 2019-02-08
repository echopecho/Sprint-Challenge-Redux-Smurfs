import React, { Component } from 'react';
import './App.css';
import SmurfList from './Smurfs/SmurfList';
import { addSmurf } from '../actions'

import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.addSmurf()
  }

  render() {
    return (
      <div className="App">
        <SmurfList />
      </div>
    );
  }
}

export default connect(null, { addSmurf })(App);
