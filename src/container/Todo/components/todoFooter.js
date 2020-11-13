import React, { memo } from 'react';

const todoFooter = ({ status, filter }) => {
  console.log('todoFooter');
  return (
    <div>
      <button
        type="button"
        style={{
          borderColor: status === 'all' ? 'red' : 'transparent',
        }}
        onClick={() => filter('all')}
      >
        All
      </button>
      <button
        type="button"
        style={{
          borderColor: status === 'pending' ? 'red' : 'transparent',
        }}
        onClick={() => filter('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        style={{
          borderColor: status === 'completed' ? 'red' : 'transparent',
        }}
        onClick={() => filter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default memo(todoFooter);
