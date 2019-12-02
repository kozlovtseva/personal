import React from 'react';
import NavItem from './NavItem';
import { NavItemInt } from '../interfaces/NavItem';

interface Props {
    items: NavItemInt[];
}

const NavBar = ({ items }: Props) => {
    return (
        <div>
            {items.map(item => (
                <NavItem
                    item={{
                        title: item.title,
                        href: item.href,
                        key: item.title,
                    }}
                />
            ))}
        </div>
    );
};

export default NavBar;
