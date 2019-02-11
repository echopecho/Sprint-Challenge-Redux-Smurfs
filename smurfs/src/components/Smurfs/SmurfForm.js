import React from 'react';
import { addSmurf, updateSmurf } from './../../actions'

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

  componentDidMount() {
    if(this.props.selected) {
      this.setState({
        name: this.props.smurf.name,
        age: this.props.smurf.age,
        height: this.props.smurf.height
      })
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitSmurf = e => {
    e.preventDefault();
    if(this.props.selected) {
      this.props.updateSmurf(this.state, this.props.smurf.id)
    } else {
      this.props.addSmurf(this.state);
    }
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    return (
      <div className={this.props.selected ? 'update-form' : 'add-form'}>
        <form onSubmit={this.submitSmurf}>
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
          <button type="submit">{this.props.selected ? "Update Smurf" : "Add Smurf"}</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addSmurf, updateSmurf })(SmurfForm);