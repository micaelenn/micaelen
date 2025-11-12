'use client'

// external dependencies
import { usePathname } from 'next/navigation';
import React, { FC } from 'react'
import Link from 'next/link'

// internal dependencies
import { Component } from './Menu.styles'
import { MenuItemProps } from '@/utils/types/MenuItemProps';

// types
interface MenuProps {
  menu: MenuItemProps[];
}

const Menu: FC<MenuProps> = ({ menu }) => {
  const pathname = usePathname()
  const firstPath = `/${pathname.split('/')[1]}` 

  return (
    <Component>
      <ul>
        {menu.map((item, index) =>
          <li key={index} className={firstPath === item.url ? 'current' : ''}>
            <Link href={item.url}>
              <div className="icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
            </Link>
          </li>
        )}
      </ul>
    </Component>
	);
};

export default Menu;
