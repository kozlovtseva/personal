import React from 'react';

import Button from '../UI/Button';
import styles from './Footer.module.scss';

const Footer: React.FC<{}> = () => {
    return (
        <div className={styles.Container}>
            <p>Задизайнено собственными ручками в Figma</p>
            <Button
                classesNames="Button Button_Yellow"
                href="https://www.figma.com/"
                text="посомотреть"
            />
        </div>
    );
};

export default Footer;
