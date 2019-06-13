import React from "react";
import { useAxios } from "common/hooks/hooksConfig";
import styled from "styled-components";

const TestComponent = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://jsonplaceholder.typicode.com/users"
  });
  return (
    <div>
      {data && data.data.map((data, idx) => <div key={idx}>{data.name}</div>)}
      <div>{loading && "loading"}</div>
      <Button onClick={refetch}>refetch</Button>
    </div>
  );
};

const Button = styled.button`
  font-family: "Noto Sans KR";
  font-weight: 300;
  ${({ theme, theme: { responsiveSize } }) => {
    return theme.responsiveStyles(
      responsiveSize.desctop,
      `{
        padding:10px;
      }`
    );
  }};
  ${({ theme, theme: { responsiveSize } }) => {
    return theme.responsiveStyles(
      responsiveSize.laptop,
      `{
        padding:30px;
      }`
    );
  }};
`;

export default TestComponent;
