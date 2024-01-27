// external dependencies
import React, { FC, useEffect, useState } from 'react'
import { Component, List } from './Updates.styles'
import { StatusProps } from '@/utils/types/StatusProps'

interface UpdatesProps {
  key: string;
  emoji: string;
  label: string;
}

const Updates: FC<UpdatesProps> = ({ status }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const statusItems = [
    { key: 'listening', emoji: '🎶', label: 'Listening:' },
    { key: 'learning', emoji: '📖', label: 'Learning:' },
    { key: 'watching', emoji: '📺', label: 'Watching:' },
    { key: 'location', emoji: '📍', label: '' },
    { key: 'watchedMovie', emoji: '🎬', label: 'Last Movie:' },
    { key: 'playing', emoji: '🎮', label: 'Playing:' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % statusItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [statusItems.length])

  return (
    <Component>
      <List className="updates">
        {statusItems.map((item, index) => (
          <li
            key={item.key}
            className={index === visibleIndex ? 'is-visible' : ''}
          >
            {status[item.key] && `${item.emoji} ${item.label} ${status[item.key]}`}
          </li>
        ))}
      </List>
    </Component>
  );
};

export default Updates;