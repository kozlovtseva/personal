import React from 'react';

import { skillsItem } from '../../store/reducers/dataReducer';

import styles from './SkillsItem.module.scss';

interface Props {
    item: skillsItem;
}
const SkillsItem = ({ item }: Props, key: number) => {
    return (
        <div className={styles.Item}>
            <img
                className={styles.Logo}
                src={require(`../../images/icons/${item.logo}`)}
                alt={item.name}
            />
            <span>{item.name}</span>
        </div>
    );
};

export default SkillsItem;
