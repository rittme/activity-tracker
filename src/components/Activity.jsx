import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import formatMoment from 'moment-duration-format';

export default class Activity extends React.Component {
  render() {
    return (
      <li className="activity-list_item">
        <div className="activity-list_item_date">
          {moment.unix(this.props.activity.date).format('DD MMM YY')}
        </div>
        <div className="activity-list_item_duration">
          {moment.duration(this.props.activity.duration).format('h[h] m[m]')}
        </div>
        <div className="activity-list_item_content">{this.props.activity.content}</div>
      </li>
    );
  }
}

Activity.PropTypes = {
  activity: PropTypes.object
}
