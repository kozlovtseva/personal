import { Reducer } from 'redux';
import { ActionTypes, CertificatesActions } from '../actions';

export interface Item {
    id: string;
    image: string;
    title: string;
    info: string[];
    href: string;
}

export interface Company {
    title: string;
    subtitle: string;
    image: string;
    items: Item[];
}

export interface CertificatesArray {
    online: Company[];
}

export interface CertificatesState {
    data: CertificatesArray;
}

const initialState: CertificatesState = {
    data: {
        online: [],
    },
};

// eslint-disable-next-line import/prefer-default-export
export const CertificatesReducer: Reducer<
    CertificatesState,
    CertificatesActions
> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CERTIFICATES: {
            return {
                ...state,
                data: action.data,
            };
        }
        default:
            return state;
    }
};
