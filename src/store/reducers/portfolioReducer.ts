import { Reducer } from 'redux';
import { ActionTypes, PortfolioActions } from '../actions';

export interface Item {
    title: string;
    image: string;
    href: string;
    text: string[];
}

export interface PortfolioArray {
    projects: Item[];
}

export interface PortfolioState {
    data: PortfolioArray;
}

const initialState: PortfolioState = {
    data: {
        projects: [],
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
