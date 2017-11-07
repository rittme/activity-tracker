import { connect } from 'react-redux';
import ActivityInput from './ActivityInput.jsx';
import { addActivity } from '../actions';

const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddActivity: (date, duration, content) => {
      dispatch(addActivity(date, duration, content))
    }
  }
}

const ActivityInputContainer = connect(mapStateToProps, mapDispatchToProps)(ActivityInput);

export default ActivityInputContainer;
