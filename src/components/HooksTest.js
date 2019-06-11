import React from "react";
import usePreventLeave from "common/hooks/usePreventLeave";

const TestComponent = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

export default TestComponent;
