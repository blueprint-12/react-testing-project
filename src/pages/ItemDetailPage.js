import React from "react";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useItemDetailInfo } from "../shared/api";

import Header from "../components/Header";

function ItemDetailPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query_id = searchParams.get("id");

  const { data, isLoading } = useItemDetailInfo(query_id);
  console.log(data);
  if (isLoading) {
    return <Header />;
  }

  const { title, content, id } = data;
  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <header>
            <span>{id}. </span>
            {title}
          </header>
          <p>{content}</p>
        </Content>
        <Button onClick={() => navigate(-1)}>뒤로가기</Button>
      </Wrapper>
    </Container>
  );
}

export default React.memo(ItemDetailPage);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 60%;
  margin-top: 80px;
`;
const Content = styled.section`
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 35px;
  background-color: white;

  & > header {
    font-size: 2rem;
    padding-bottom: 20px;
    font-weight: 600;

    & > span {
      color: #0984e3;
    }
  }
  & > p {
    text-align: justify;
  }
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 0.6rem 1.4rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #0984e3;
  color: white;
`;
