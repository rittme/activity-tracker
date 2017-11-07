import React from 'react';
import PropTypes from 'prop-types';
import Activity from './Activity.jsx';

export default class ActivityList extends React.Component {
  render() {
    const activities = this.props.activities.map(activity =>
      <Activity activity={activity} key={activity.key} />
    );

    return (
      <ul className="activity-list">
        {activities}
      </ul>
    )
  }
}

ActivityList.PropTypes = {
  activities: PropTypes.arrayOf(PropTypes.object)
}
