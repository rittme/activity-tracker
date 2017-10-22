import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import formatMoment from 'moment-duration-format';
import { addActivity } from '../actions';

class ActivityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '',
      content: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.duration.trim()) {
      alert('Duration can\'t be empty');
      return;
    }
    if (!this.state.content.trim()) {
      alert('Content can\'t be empty');
      return;
    }

    const date = moment().valueOf();

    dispatch(addActivity(date, this.state.duration, this.state.content));
    this.input.value = '';
  }

  handleDurationChange(event) {
    this.setState({
      duration: event.target.value
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return (
      <div className="activity-input">
        <form className="activity-input_input-group"
          onSubmit={this.handleSubmit}>
          <input
            className="activity-input_duration"
            type="text"
            onChange={this.handleDurationChange}
            value={this.state.duration}/>
          <input
            className="activity-input_content"
            type="text"
            onChange={this.handleContentChange}
            value={this.state.content}/>
          <input type="submit" style={{display: "none"}} />
        </form>
      </div>
    )
  }
}

ActivityInput = connect()(ActivityInput);

export default ActivityInput;
