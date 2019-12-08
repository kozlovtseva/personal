import React from 'react';

import styles from './SkillsItem.module.scss';

interface Props {
    value: string;
    key: number;
}
const SkillsItem: React.FC<Props> = props => {
    return <div className={styles.Item}>{props.value}</div>;
};

export default SkillsItem;
