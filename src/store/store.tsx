import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { DataState, DataReducer } from './reducers/dataReducer';
import { PortfolioState, PortfolioReducer } from './reducers/portfolioReducer';
import {
    CertificatesState,
    CertificatesReducer,
} from './reducers/certificatesReducer';

export interface AppState {
    vitae: DataState;
    portfolio: PortfolioState;
    certificates: CertificatesState;
}

const rootReducer = combineReducers<AppState>({
    vitae: DataReducer,
    portfolio: PortfolioReducer,
    certificates: CertificatesReducer,
});

export default function configureStore(): Store<AppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}
