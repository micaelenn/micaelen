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
  image: [];
  updatedAt: string;
}

const Heading: FC<HeadingProps> = ({title, description, image, updatedAt }) => {
  return (
    <Component>
       {/*  <Image 
          src={getImageURL(image)}
          alt={title}
          loading={`eager`}
          height={200}
          width={200}
        /> */}
        <img src={getImageURL(image)} />

        <div>
          {/* <time>{updatedAt}</time> */}
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
    </Component>
	);
};

export default Heading;
