import { DataArray } from './reducers/dataReducer';
import { PortfolioArray } from './reducers/PortfolioReducer';
import DATA from './data.json';

export enum ActionTypes {
    GET_DATA = 'GET_DATA',
    GET_PORTFOLIO = 'GET_PORTFOLIO',
}

export interface GetDataAction {
    type: ActionTypes.GET_DATA;
    data: DataArray;
}

export interface GetPortfolio {
    type: ActionTypes.GET_PORTFOLIO;
    data: PortfolioArray;
}

export type DataActions = GetDataAction;
export type PortfolioActions = GetPortfolio;

export function GetDataAction() {
    return {
        type: ActionTypes.GET_DATA,
        data: DATA.vitae,
    };
}
export function GetPortfolio() {
    return {
        type: ActionTypes.GET_PORTFOLIO,
        data: DATA.portfolio,
    };
}
