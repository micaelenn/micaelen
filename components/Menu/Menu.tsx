'use client'

// external dependencies
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
  return (
    <Component>
      <ul>
        {menu.map((item, index) =>
          <li key={index}>
            <Link href={item.url}>
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            </Link>
          </li>
        )}
      </ul>
    </Component>
	);
};

export default Menu;
