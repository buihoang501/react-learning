import React from 'react';

const ChildUseMemo = ({ info, logger }) => {
  console.log('Child render');

  logger();
  return (
    <div>
      ChildUseMemo
      <p>Name's {info.name}</p>
    </div>
  );
};

export default React.memo(ChildUseMemo);
