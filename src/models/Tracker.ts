export interface TrackPointData {
    foo: boolean;
}

export interface TrackPoint {
    timestamp: number;
    data: TrackPointData;
}

export interface TrackerReduxState {
    trackpoints: TrackPoint[];
}
