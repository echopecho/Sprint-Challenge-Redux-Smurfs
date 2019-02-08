import React from 'react';
import { addSmurf } from './../../actions'

import { connect } from 'react-redux';

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handleChange}
          >
          </input>
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Enter age"
            onChange={this.handleChange}
          >
          </input>
          <input
            type="text"
            name="height"
            value={this.state.height}
            placeholder="Enter height"
            onChange={this.handleChange}
          >
          </input>
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addSmurf })(SmurfForm);