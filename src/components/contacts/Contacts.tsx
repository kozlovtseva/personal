import React from 'react';

import Button from '../UI/Button';
import styles from './Contacts.module.scss';

const Contacts: React.FC<{}> = () => {
    return (
        <div className={styles.Container}>
            <h3 className={styles.Title}>Где меня найти</h3>
            <div className={styles.List}>
                <div className={styles.Item}>
                    <img
                        className={styles.Logo}
                        src={require(`../../images/icons/telegram.png`)}
                        alt="telegram"
                    />
                    <p className={styles.Text}>@a_kozlovtseva</p>
                </div>
                <div className={styles.Item}>
                    <img
                        className={styles.Logo}
                        src={require(`../../images/icons/mail.png`)}
                        alt="mail"
                    />
                    <p className={styles.Text}>alina.lm@mail.ru</p>
                </div>
                <div className={styles.Item}>
                    <img
                        className={styles.Logo}
                        src={require(`../../images/icons/hh.jpg`)}
                        alt="vitae"
                    />
                    <Button
                        classesNames="Button Button_Blue Button_Tiny"
                        href="https://dmitrov.hh.ru/resume/ff70e844ff0761ae5f0039ed1f64434a545164"
                        text="перейти"
                    />
                </div>
                <div className={styles.Item}>
                    <img
                        className={styles.Logo}
                        src={require(`../../images/icons/github.png`)}
                        alt="repo"
                    />
                    <Button
                        classesNames="Button Button_Blue Button_Tiny"
                        href="https://github.com/kozlovtseva"
                        text="перейти"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
