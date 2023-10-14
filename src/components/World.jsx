import React from 'react';

function World({ html }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default World;
