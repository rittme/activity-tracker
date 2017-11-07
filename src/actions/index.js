import {
  ADD_ACTIVITY,
  REMOVE_ACTIVITY
  } from './types';

export const addActivity = (date, duration, content) => {
  return {
    type: ADD_ACTIVITY,
    date,
    duration,
    content
  }
}

export const removeActivity = (key) => {
  return {
    type: REMOVE_ACTIVITY,
    key
  }
}
