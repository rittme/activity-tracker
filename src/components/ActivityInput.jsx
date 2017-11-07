import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import formatMoment from 'moment-duration-format';
import { addActivity } from '../actions';

export default class ActivityInput extends React.Component {
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

    if (!this.state.content.trim()) {
      alert('Duration can\'t be empty');
      return;
    }

    const duration = this.state.duration.
                          trim().
                          split(/[h:]{1}/).
                          reduceRight((prev, curr, index) => {
      const multiplier = index ? 60 : 1;
      return prev + curr * 60000 * multiplier;
    }, 0);

    const date = moment().valueOf();

    this.props.onAddActivity(date, duration, this.state.content);

    this.setState({
      duration: '',
      content: ''
    });
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
            placeholder='00:00'
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
