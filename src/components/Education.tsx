import React from 'react';

import { educationItem } from '../store/reducer';

import styles from './Education.module.scss';

interface Props {
    item: educationItem;
}

const Education = ({ item }: Props, key: number) => {
    console.log(item.details);
    return (
        <div className={styles.Block}>
            <div className={styles.Logo}>
                <img
                    className={styles.Image}
                    src={require(`../images/${item.logo}`)}
                    alt="education"
                />
            </div>
            <div className={styles.Type}>{item.type}</div>
            <div className={styles.Name}>{`${item.name}, ${item.date}`}</div>
            <div className={styles.Details}>
                {item.details.map((item: string, index: number) => {
                    return (
                        <div className={styles.Detail} key={index}>
                            {item}
                        </div>
                    );
                })}
            </div>
            {item.probation ? (
                <div>
                    <div>+</div>
                    <div>стажировка</div>
                </div>
            ) : null}
        </div>
    );
};

export default Education;
