"use client"

// external dependencies
import React, { FC } from 'react'
import Link from 'next/link'

// internal dependencies
import { Component } from './Header.styles'
import Updates from '@/components/Updates/Updates'
import { StatusProps } from '@/utils/types/StatusProps'

// types
interface HeaderProps {
  content: {
    title: string;
    updates: StatusProps;
  }
}

const Header: FC<HeaderProps> = ({ content }) => {    
  return (
    <Component className="container">
      <Link href={'/'}>
        <h1>{content.title}</h1>
      </Link>
      <Updates status={content.updates} />
    </Component>
	);
};

export default Header;
