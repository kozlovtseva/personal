import React from 'react';
import NavBar from './NavBar';

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
        <div>
            <NavBar items={navbar} />
        </div>
    );
};

export default Header;
