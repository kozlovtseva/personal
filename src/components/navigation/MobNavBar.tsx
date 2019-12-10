import React from 'react';
import MobNavItem from './MobNavItem';
import { NavItemInt } from '../../interfaces/NavItem';
import styles from './MobNavBar.module.scss';

interface Props {
    items: NavItemInt[];
    closeNav: () => void;
}

const NavBar: React.FC<Props> = props => {
    return (
        <div className={styles.Container}>
            <div className={styles.Cancel} onClick={props.closeNav} />
            {props.items.map(item => (
                <MobNavItem
                    item={{
                        title: item.title,
                        href: item.href,
                    }}
                    key={item.title}
                />
            ))}
        </div>
    );
};

export default NavBar;
