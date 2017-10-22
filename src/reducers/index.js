import { combineReducers } from 'redux';
import {
  ADD_ACTIVITY
  } from '../actions/actionTypes.js';

function activities(state = [], action) {
  switch(action.type) {
    case ADD_ACTIVITY:
      return [
        {
          date: action.date,
          duration: action.duration,
          content: action.content
        },
        ...state
      ];
    default:
      return state;
  }
}

const activityTracker = combineReducers({
  activities
});

export default activityTracker;
