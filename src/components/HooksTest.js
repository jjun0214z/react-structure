import React from "react";
import useClick from "common/hooks/useClick";

const TestComponent = () => {
  const sayHello = () => console.log("hello");
  const title = useClick(sayHello);
  return (
    <div>
      <div ref={title}>Hooks TEST</div>
    </div>
  );
};

export default TestComponent;
