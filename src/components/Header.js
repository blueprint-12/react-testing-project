import React from "react";
import styled from "styled-components";

function Header({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: #70a1ff;
  color: white;
  padding: 20px;

  & > p {
    color: rgb(240, 240, 240);
  }
`;
