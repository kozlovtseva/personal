import { Reducer } from 'redux';
import { DataActions, ActionTypes } from '../actions';

export interface educationItem {
    type: string;
    date: string;
    name: string;
    details: string[];
    probation: boolean;
    logo: string;
}

export interface DataArray {
    skills: string[];
    education: educationItem[];
}

export interface DataState {
    data: DataArray;
}

const initialState: DataState = {
    data: {
        skills: [],
        education: [],
    },
};

// eslint-disable-next-line import/prefer-default-export
export const DataReducer: Reducer<DataState, DataActions> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case ActionTypes.GET_DATA: {
            return {
                ...state,
                data: action.data,
            };
        }
        default:
            return state;
    }
};
