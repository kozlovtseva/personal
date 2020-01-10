import React from 'react';

import Button from '../UI/Button';
import styles from './Footer.module.scss';

const Footer: React.FC<{}> = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Design}>
                <p>Задизайнено собственными ручками в Figma</p>
                <Button
                    classesNames="Button Button_Yellow"
                    href="https://www.figma.com/file/L9ov2PqvFTtNATDYW35Yyq/personal?node-id=0%3A1"
                    text="посмотреть"
                />
            </div>
            <div className={styles.Technologies}>
                <h5 className={styles.Title}>Что использовала:</h5>
                <ul className={styles.List}>
                    <li className={styles.Item}>
                        React & Redux (каркас Create React App)
                    </li>
                    <li className={styles.Item}>TypeScript</li>
                    <li className={styles.Item}>React Router</li>
                    <li className={styles.Item}>SASS(SCSS)</li>
                    <li className={styles.Item}>CSS Modules</li>
                </ul>
            </div>
            <div className={styles.GitHub}>
                <p>Исходный код (GitHub)</p>
                <div className={styles.Button}>
                    <Button
                        classesNames="Button Button_Yellow"
                        href="https://github.com/kozlovtseva/personal"
                        text="посмотреть"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
