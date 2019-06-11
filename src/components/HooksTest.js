import React from "react";
import useAxios from "common/hooks/useAxios";

const TestComponent = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://jsonplaceholder.typicode.com/users"
  });
  return (
    <div>
      {data && data.data.map((data, idx) => <div key={idx}>{data.name}</div>)}
      <div>{loading && "loading"}</div>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default TestComponent;
