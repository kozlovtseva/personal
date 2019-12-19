import { DataArray } from './reducers/dataReducer';
import { PortfolioArray } from './reducers/portfolioReducer';
import { CertificatesArray } from './reducers/certificatesReducer';
import DATA from './data.json';

export enum ActionTypes {
    GET_DATA = 'GET_DATA',
    GET_PORTFOLIO = 'GET_PORTFOLIO',
    GET_CERTIFICATES = 'GET_CERTIFICATES',
}

export interface GetDataAction {
    type: ActionTypes.GET_DATA;
    data: DataArray;
}

export interface GetPortfolio {
    type: ActionTypes.GET_PORTFOLIO;
    data: PortfolioArray;
}

export interface GetCertificates {
    type: ActionTypes.GET_CERTIFICATES;
    data: CertificatesArray;
}

export type DataActions = GetDataAction;
export type PortfolioActions = GetPortfolio;
export type CertificatesActions = GetCertificates;

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
export function GetCertificates() {
    return {
        type: ActionTypes.GET_CERTIFICATES,
        data: DATA.certificates,
    };
}
