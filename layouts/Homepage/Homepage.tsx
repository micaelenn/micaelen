'use client'

// external dependencies
import React, { FC  } from 'react';

// internal dependencies
import { Container } from './Homepage.styles'
import Header from '@/components/Header/Header'
import Introduction from '@/components/Introduction/Introduction'

// types
import { StatusProps } from '@/utils/types/StatusProps'
interface HomepageLayoutProps {
  headerContent: StatusProps
}

const HomepageLayout: FC<HomepageLayoutProps> = ({ headerContent }) => {  
  return (
    <Container>
      <Header 
        updates={headerContent} 
      />

      <Introduction />
    </Container>
	);
};

export default HomepageLayout;
