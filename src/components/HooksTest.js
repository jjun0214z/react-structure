import React from "react";
import useInput from "common/hooks/useInput";
import useTabs from "common/hooks/useTabs";

const content = [
  { tab: "section 1", content: "section 1 content" },
  { tab: "section 2", content: "section 2 content" }
];

const TestComponent = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <div>Hooks TEST</div>
      {content.map((section, idx) => (
        <button onClick={() => changeItem(idx)} key={idx}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default TestComponent;
