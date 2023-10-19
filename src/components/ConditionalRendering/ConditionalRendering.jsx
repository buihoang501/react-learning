import React, { Fragment, useState } from 'react';

const ConditionalRendering = () => {
  const [showContent, setShowContent] = useState(false);

  const showContentHandler = () => {
    setShowContent(true);
  };

  const hiddenContentHandler = () => {
    setShowContent(false);
  };

  return (
    <Fragment>
      {showContent && <div>Conditional Rendering Content</div>}
      <button onClick={showContentHandler}>Click to show content</button>
      <button onClick={hiddenContentHandler}>Click to hidden content</button>
    </Fragment>
  );
};

export default ConditionalRendering;
