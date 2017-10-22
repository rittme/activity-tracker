import { connect } from 'react-redux';
import ActivityList from './ActivityList.jsx';

const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};

const ActivityListContainer = connect(mapStateToProps)(ActivityList);

export default ActivityListContainer;
