import { combineReducers } from '@reduxjs/toolkit';
import { trackerReducer } from '../slices/dmxcontroller';

export const rootReducer = combineReducers({
    tracker_reducer: trackerReducer,
});
