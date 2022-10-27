import styled from "styled-components";

function VList({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default VList;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  padding: 20px;
`;
