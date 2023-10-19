import React from 'react';

const ChildUseCallBack = ({ logger }) => {
  logger();

  return <div>ChildUseCallBack</div>;
};

export default React.memo(ChildUseCallBack);
