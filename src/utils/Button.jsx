import React from 'react';

function Button ({content, className}) {
  return (
    <button className={className}>
      {content}
    </button>
  );
};

export default Button;