// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Component } from './Socials.styles'
import { SocialMediasProps } from '@/utils/types/SocialMediasProps';

// types
interface SocialsProps {
  socials: SocialMediasProps[];
}

const Socials: FC<SocialsProps> = ({ socials }) => {
  return (
    <Component>
        {socials.map((social, index) =>
          <a key={index} className="link" href={social.url} target='_blank'>
            <div dangerouslySetInnerHTML={{ __html: social.icon }} />
            <p>{social.name}</p>
          </a>
        )}
    </Component>
	);
};

export default Socials;
