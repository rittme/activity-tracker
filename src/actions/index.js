import {
  ADD_ACTIVITY
  } from './actionTypes.js';

export const addActivity = (date, duration, content) => {
  return {
    type: ADD_ACTIVITY,
    date,
    duration,
    content
  }
}
