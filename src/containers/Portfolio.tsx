import React from 'react';

import { connect } from 'react-redux';
import { GetPortfolio } from '../store/actions';
import { AppState } from '../store/store';
import { PortfolioArray } from '../store/reducers/portfolioReducer';

import PortfolioItem from '../components/portfolio/PortfolioItem';

import styles from './Portfolio.module.scss';

interface PropsFromState {
    data: PortfolioArray;
}

interface PropsFromDispatch {
    GetPortfolio: typeof GetPortfolio;
}

type AllProps = PropsFromState & PropsFromDispatch;

class Portfolio extends React.Component<AllProps> {
    static defaultProps = { GetPortfolio: undefined };

    componentDidMount() {
        const { GetPortfolio: gp } = this.props;
        gp();
    }

    render() {
        console.log(this.props.data);
        return (
            <div className={styles.Projects}>
                {this.props.data.projects.map((item, i) => (
                    <PortfolioItem key={i} item={item} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (store: AppState) => {
    return {
        data: store.portfolio.data,
    };
};

const mapDispatchToProps = {
    GetPortfolio,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
