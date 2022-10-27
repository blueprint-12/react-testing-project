import React from "react";
import { PulseLoader } from "react-spinners";
import styled from "styled-components";

function Spinner() {
  return (
    <Container>
      <PulseLoader color="#81a0d0" margin={4} size={15} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
