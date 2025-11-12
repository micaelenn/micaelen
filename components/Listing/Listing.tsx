// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Component } from './Listing.styles'
import { PostProps } from '@/utils/types/PostProps'
import Card from '@/components/Card/Card'

// types
interface ListingProps {
  posts: PostProps[]
}

const Listing: FC<ListingProps> = ({ posts }) => {  
  return (
    <Component>
      {posts ? 
        posts.map((post, index) =>
          <Card
            key={index}
            info={post}
          />
        )
      : null}
    </Component>
	);
};

export default Listing;
