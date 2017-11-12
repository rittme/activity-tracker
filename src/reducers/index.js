import { combineReducers } from 'redux';
import {
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  } from '../actions/types.js';

function activities(state = [], action) {
  switch(action.type) {
    case ADD_ACTIVITY:
      return [
        {
          key: action.date,
          date: action.date,
          duration: action.duration,
          content: action.content
        },
        ...state
      ];
      break;
    case REMOVE_ACTIVITY:
      return state.filter((activity) => activity.key != action.key);
    default:
      return state;
  }
}

export {
  activities
};
