// external dependencies
import React, { FC } from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

// internal dependencies
import { Component } from './Heading.styles'
import { getImageURL } from '@/utils/helpers/assets'

// types
interface HeadingProps {
  title: string;
  description: string;
  image: object;
}

const Heading: FC<HeadingProps> = ({title, description, image}) => {
  return (
    <Component>
        <img src={getImageURL(image)} />

        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
    </Component>
	);
};

export default Heading;
