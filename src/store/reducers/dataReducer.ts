import { Reducer } from 'redux';
import { DataActions, ActionTypes } from '../actions';

interface Items {
    [index: string]: string;
}

export interface educationItem {
    type: string;
    date: string;
    name: string;
    details: string[];
    probation: boolean;
    logo: string;
}

export interface DataArray {
    experience: Items[];
    skills: string[];
    about: string;
    languages: Items[];
    education: educationItem[];
}

export interface DataState {
    data: DataArray;
}

const initialState: DataState = {
    data: {
        experience: [],
        skills: [],
        about: '',
        languages: [],
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
