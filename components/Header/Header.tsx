// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component } from './Header.styles'
import { StatusProps } from '@/utils/types/StatusProps';
import Updates from '@/components/Updates/Updates'
import Social from '@/components/Social/Social'

// types
interface HeaderProps {
  updates: StatusProps;
}

const Header: FC<HeaderProps> = ({ updates }) => {  
  return (
    <Component className="container">
      <Updates status={updates} />
      <Social />
    </Component>
	);
};

export default Header;
