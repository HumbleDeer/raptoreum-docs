import React from 'react';
import Content from '@theme-original/AnnouncementBar/Content';

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} style={{fontSize: 100 + "%"}}/>
    </>
  );
}
