import React from 'react';
import AnnouncementBar from '@theme-original/AnnouncementBar';

export default function AnnouncementBarWrapper(props) {
  return (
    <>
      <AnnouncementBar {...props} style={{justifyContent: 'center', padding: 10 + "px" + 0 }}/>
    </>
  );
}
