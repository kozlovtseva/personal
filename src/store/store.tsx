import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { DataState, DataReducer } from './reducers/dataReducer';
import { PortfolioState, PortfolioReducer } from './reducers/portfolioReducer';

export interface AppState {
    vitae: DataState;
    portfolio: PortfolioState;
}

const rootReducer = combineReducers<AppState>({
    vitae: DataReducer,
    portfolio: PortfolioReducer,
});

export default function configureStore(): Store<AppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}
