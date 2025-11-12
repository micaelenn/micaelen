// external dependencies
import React, { FC } from 'react';
import { PortableText } from '@portabletext/react'

// internal dependencies
import { Component, Content } from './Introduction.styles'
import PillList from '@/components/PillList/PillList'
import { IntroProps } from '@/utils/types/IntroProps'

// types
interface IntroductionProps {
  content: IntroProps;
} 

const Introduction: FC<IntroductionProps> = ({ content }) => {  
  return (
      <Component>
        <Content>
          <div>
            <PortableText
              value={content.description}
            />
          </div>
          
          {content.stack ? 
            <PillList 
              title={`Skills & Technologies`} 
              items={content.stack} 
            />
          : null}
        </Content>
      </Component>
	)
}

export default Introduction;
