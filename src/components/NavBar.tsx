import React, { useState, useEffect } from 'react';


type NavItem = {
    label: string;
    link: string;
};

type NavbarProps = {
    items: NavItem[];
};

const Navbar = ({ items }: NavbarProps) => {
    const [activeItem, setActiveItem] = useState<NavItem | null>(null);

    useEffect(() => {
        // Set the active item based on the current URL
        const currentPath = window.location.pathname;
        const active = items.find(item => item.link === currentPath);
        setActiveItem(active ?? null);
    }, [items]);

    const handleItemClick = (item: NavItem) => {
        setActiveItem(item);
    };

    return (
        <nav>
            <ul>
                {items.map(item => (
                    <li key={item.link}>
                        <a
                            href={item.link}
                            className={activeItem === item ? 'active' : ''}
                            onClick={() => handleItemClick(item)}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
