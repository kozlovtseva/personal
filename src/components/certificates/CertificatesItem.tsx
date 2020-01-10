import React from 'react';

import { Company } from '../../store/reducers/certificatesReducer';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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

            <Carousel showThumbs={true}>
                {props.item.items.map((item, index) => (
                    <div className={styles.Carousel__Item} key={index}>
                        <img
                            className={styles.Carousel__Image}
                            src={require(`../../images/${item.image}`)}
                            alt={item.title}
                        />
                        <div className={styles.Carousel__Details}>
                            <div className={styles.Carousel__Title}>
                                {item.title}
                            </div>
                            <ul className={styles.Carousel__List}>
                                {item.info.map((text, i) => (
                                    <li className={styles.Carousel__Text}>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </Carousel>
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
