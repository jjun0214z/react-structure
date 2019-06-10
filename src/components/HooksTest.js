import React from "react";
import useTitle from "common/hooks/useTitle";

const TestComponent = () => {
  const titleUpdate = useTitle("loading");
  setTimeout(() => titleUpdate("Welcome"), 5000);
  return (
    <div>
      <div>Hooks TEST</div>
    </div>
  );
};

export default TestComponent;
