import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {AppThunk} from '../store';
import type {TrackerReduxState} from '../models/Tracker';

const initialTrackerState: TrackerReduxState = {
    trackpoints: [],
};

const tracker_slice = createSlice({
    name: 'tracker',
    initialState: initialTrackerState,
    reducers: {
        setTrackpoints(state: TrackerReduxState, action: PayloadAction<any>): void {
            state.trackpoints = action.payload.trackpoints;
        },
    },
});

export const updateTrackpoints =
    (trackpoints: any): AppThunk =>
        async (dispatch): Promise<void> => {
            dispatch(tracker_slice.actions.setTrackpoints(trackpoints));
        };

export const { reducer: trackerReducer } = tracker_slice;

const default_export = { tracker_slice };
export default default_export;
