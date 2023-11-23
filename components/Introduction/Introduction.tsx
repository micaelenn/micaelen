// external dependencies
import React, { FC } from 'react';
import Image from 'next/image'
import { Code } from "@phosphor-icons/react"

// internal dependencies
import { Component, Content, Title } from './Introduction.styles'
import Separator from '@/components/Separator/Separator'

// types
interface IntroductionProps {
  text?: string;
  image?: {
    src: string;
    alt: string;
  }
} 

const Introduction: FC<IntroductionProps> = ({ image, text }) => {
  return (
      <Component className="container">
        <Content>
          <div>
            <Title>
              <h1>Micaelen Miranda</h1>
              <Code size={32} />
            </Title>
          </div>
          
          <div>
            <Image 
              src={`/images/profile.jpeg`}
              alt={`Profile Picture`}
              loading={`eager`}
              height={250}
              width={250}
            />
          </div>
        </Content>

        <Separator />
      </Component>
	)
}

export default Introduction;
