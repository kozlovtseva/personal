import React from 'react';
import NavBar from './NavBar';
import styles from './Header.module.scss';

const Header: React.FC<{}> = () => {
    const navbar = [
        {
            href: '/vitae',
            title: 'резюме',
        },
        {
            href: '/portfolio',
            title: 'портфолио',
        },
        {
            href: '/certificates',
            title: 'сертификаты',
        },
        {
            href: '/contacts',
            title: 'контакты',
        },
    ];

    return (
        <div className={styles.Container}>
            <div className={styles.Background}>
                <p>//coding mum</p>
            </div>
            <NavBar items={navbar} />
        </div>
    );
};

export default Header;
