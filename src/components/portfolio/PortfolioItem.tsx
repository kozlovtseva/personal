import React from 'react';

import { Item } from '../../store/reducers/portfolioReducer';
import Button from '../UI/Button';

import styles from './PortfolioItem.module.scss';

interface Props {
    item: Item;
    color: number;
    key: number;
}

const PortfolioItem = (props: Props) => {
    return (
        <div className={styles.Container}>
            <img
                className={styles.Image}
                src={require(`../../images/${props.item.image}`)}
                alt={props.item.title}
            />
            <div className={styles.Info}>
                <div className={styles.Title}>{props.item.title}</div>
                <div className={styles.Details}>
                    {props.item.text.map((item: string, index: number) => {
                        return (
                            <div className={styles.Text} key={index}>
                                {item}
                            </div>
                        );
                    })}
                </div>
                <div className={styles.Button}>
                    <Button
                        classesNames="Button Button_Blue"
                        href={props.item.href}
                        text="посомотреть"
                    />
                </div>

                <div
                    className={
                        props.color % 2 === 0
                            ? styles.Decoration + ' ' + styles.Decoration_Yellow
                            : styles.Decoration + ' ' + styles.Decoration_Blue
                    }
                />
            </div>
        </div>
    );
};

export default PortfolioItem;
