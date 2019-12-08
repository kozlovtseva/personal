import React from 'react';

import styles from './Footer.module.scss';

const Footer: React.FC<{}> = () => {
    return (
        <div className={styles.Container}>
            <p>Задизайнено собственными ручками в Figma</p>
            <div className={styles.ButtonBlock}>
                <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles.Button}
                >
                    посмотреть
                </a>
            </div>
        </div>
    );
};

export default Footer;
