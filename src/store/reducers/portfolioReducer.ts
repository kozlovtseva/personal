import { Reducer } from 'redux';
import { ActionTypes, PortfolioActions } from '../actions';

export interface PortfolioArray {
    title: string;
    text: string[];
}

export interface PortfolioState {
    data: PortfolioArray;
}

const initialState: PortfolioState = {
    data: {
        title: '',
        text: [],
    },
};

// eslint-disable-next-line import/prefer-default-export
export const PortfolioReducer: Reducer<PortfolioState, PortfolioActions> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case ActionTypes.GET_PORTFOLIO: {
            return {
                ...state,
                data: action.data,
            };
        }
        default:
            return state;
    }
};
