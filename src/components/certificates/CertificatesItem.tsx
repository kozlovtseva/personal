import React from 'react';

import { Company } from '../../store/reducers/certificatesReducer';
// import Button from '../UI/Button';

import styles from './CertificatesItem.module.scss';

interface Props {
    item: Company;
}

const CertificatesItem = (props: Props) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <div className={styles.Logo}>
                    <img
                        className={styles.Image}
                        src={require(`../../images/${props.item.image}`)}
                        alt={props.item.title}
                    />
                </div>
                <div className={styles.Company}>
                    <p className={styles.Tytle}>{props.item.title}</p>
                    <p className={styles.Subtitle}>{props.item.subtitle}</p>
                </div>
            </div>
            {/* <div className={styles.Button}>
                    <Button
                        classesNames="Button Button_Blue"
                        href={props.item.href}
                        text="посомотреть"
                    />
                </div> */}
        </div>
    );
};

export default CertificatesItem;
