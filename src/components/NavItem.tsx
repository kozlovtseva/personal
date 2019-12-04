import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemInt } from '../interfaces/NavItem';

import styles from './NavItem.module.scss';

interface Props {
    item: NavItemInt;
}

const NavItem = ({ item }: Props, key: string) => {
    return (
        <NavLink
            to={item.href}
            className={styles.Item}
            activeClassName={styles.ItemActive}
        >
            {item.title}
        </NavLink>
    );
};

export default NavItem;
