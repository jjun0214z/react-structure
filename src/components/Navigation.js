import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default () => (
  <Navigation>
    <Navi>
      <li>
        <NavLink exact to="/">
          메인
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/samplePage1">
          samplePage1
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/samplePage2">
          samplePage2
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/samplePage3">
          samplePage3
        </NavLink>
      </li>
    </Navi>
  </Navigation>
);

const Navigation = styled.nav`
  width: 100%;
`;
const Navi = styled.ul`
  width: 100%;
`;
