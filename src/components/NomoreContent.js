import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1000px;
  padding: 20px;
  text-align: center;
`;

function NomoreContent({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default NomoreContent;
