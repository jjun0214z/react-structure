import React from "react";
import useBeforeLeave from "common/hooks/useBeforeLeave";

const TestComponent = () => {
  const beforeLife = () => console.log(111);
  useBeforeLeave(beforeLife);
  return (
    <div>
      <div>1</div>
    </div>
  );
};

export default TestComponent;
