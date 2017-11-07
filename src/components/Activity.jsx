import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import moment from 'moment';
import formatMoment from 'moment-duration-format';
import { removeActivity } from '../actions';

class Activity extends React.Component {
  constructor(props) {
    super(props);

    this.removeActivity = this.removeActivity.bind(this);
  }
  removeActivity() {
    this.props.onRemoveActivity(this.props.activity.key);
  }

  render() {
    return (
      <li className="activity-list_item">
        <div className="activity-list_item_date">
          {moment(this.props.activity.date).format('DD MMM YY')}
        </div>
        <div className="activity-list_item_duration">
          {moment.duration(this.props.activity.duration).format('h[h] m[m]')}
        </div>
        <div className="activity-list_item_content">{this.props.activity.content}</div>
        <div className="activity-list_item_close">
          <a onClick={this.removeActivity}>
            ×
          </a>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveActivity: (key) => {
      dispatch(removeActivity(key))
    }
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};


Activity.PropTypes = {
  activity: PropTypes.object
}

Activity = connect(mapStateToProps, mapDispatchToProps)(Activity);

export default Activity;
