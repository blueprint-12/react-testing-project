import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";

function VSearchInput({ onClick, value, onChange, refValue }) {
  return (
    <Container onClick={onClick}>
      <SearchIcon />
      <Input
        type="search"
        placeholder="검색어를 입력해주세요."
        value={value}
        onChange={onChange}
        ref={refValue}
      />
    </Container>
  );
}

export default VSearchInput;

const Container = styled.figure`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ddd;

  &:hover {
    /* outline: 1px solid #f6e58d; */
    box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.3);
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 15px;
  /* border: 1px solid #ddd; */
  border: none;
  border-right: none;
  padding: 5px 10px;
  height: 40px;
  border-radius: 4px;
  outline: none;
`;

const SearchIcon = styled(IoSearchSharp)`
  color: gray;
  padding: 5px 10px;
  font-size: larger;
`;
