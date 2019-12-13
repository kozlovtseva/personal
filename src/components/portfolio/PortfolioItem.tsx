import React from 'react';

import { Item } from '../../store/reducers/portfolioReducer';

import styles from './PortfolioItem.module.scss';

interface Props {
    item: Item;
}

const PortfolioItem = ({ item }: Props, key: number) => {
    return (
        <div className={styles.Container}>
            <img
                className={styles.Image}
                src={require(`../../images/${item.image}`)}
                alt={item.title}
            />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.Details}>
                {item.text.map((item: string, index: number) => {
                    return (
                        <div className={styles.Text} key={index}>
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PortfolioItem;
