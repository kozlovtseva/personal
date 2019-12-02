import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemInt } from '../interfaces/NavItem';

interface Props {
    item: NavItemInt;
}

const NavItem = ({ item }: Props) => {
    return (
        <NavLink to={item.href} className="non_active" activeClassName="active">
            {item.title}
        </NavLink>
    );
};

export default NavItem;
