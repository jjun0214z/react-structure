import React from "react";
import useConfirm from "common/hooks/useConfirm";

const TestComponent = () => {
  const onConfirm = () => console.log("onConfirm");
  const onCancel = () => console.log("onCancel");
  const confirmDelete = useConfirm("are you sure?", onConfirm, onCancel);
  return (
    <div>
      <button onClick={confirmDelete}>test button</button>
    </div>
  );
};

export default TestComponent;
