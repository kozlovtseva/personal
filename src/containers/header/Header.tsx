import React from 'react';
import NavBar from '../../components/navigation/NavBar';
import MobNavBar from '../../components/navigation/MobNavBar';
import styles from './Header.module.scss';

interface State {
    mobNav: boolean;
}

class Header extends React.Component<{}, State> {
    state = { mobNav: false };

    render() {
        let navbar = [
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
        const toggleNavigation = () => {
            this.setState({
                mobNav: !this.state.mobNav,
            });
        };
        const header = this.state.mobNav ? (
            <MobNavBar items={navbar} closeNav={toggleNavigation} />
        ) : (
            <div className={styles.Background}>
                <div
                    onClick={() => toggleNavigation()}
                    className={styles.Burger}
                ></div>
                <p>//coding mum</p>
            </div>
        );
        return (
            <div className={styles.Container}>
                {header}
                <NavBar items={navbar} />
            </div>
        );
    }
}

export default Header;
