import { Reducer } from 'redux';
import { DataActions, DataActionTypes } from './actions';

interface Items {
    [index: string]: string;
}

interface Item {
    [index: string]: string;
}

export interface DataArray {
    experience: Items[];
    capabilities: string[];
    about: string;
    university: Item;
    languages: Items[];
    courses: Items[];
}

export interface DataState {
    data: DataArray;
}

const initialState: DataState = {
    data: {
        experience: [],
        capabilities: [],
        about: '',
        university: {},
        languages: [],
        courses: [],
    },
};

// eslint-disable-next-line import/prefer-default-export
export const DataReducer: Reducer<DataState, DataActions> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case DataActionTypes.GET_DATA: {
            return {
                ...state,
                data: action.data,
            };
        }
        default:
            return state;
    }
};
