// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component, Content } from './Footer.styles'
import Social from '@/components/Social/Social'

// types
interface FooterProps {
 
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <Component>
      <Content className="container">
        <Social />
      </Content>
    </Component>
	);
};

export default Footer;
