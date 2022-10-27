import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Item({ createdAt, title, content, type, id }) {
  return (
    <ItemContainer>
      <Link
        to={`/a?id=${id}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div id="info">
          <Title>
            <span>{id}.&nbsp;</span>
            {title}
          </Title>
          <Content className="content">{content}</Content>
        </div>
      </Link>
    </ItemContainer>
  );
}

export default React.memo(Item);

const ItemContainer = styled.li`
  box-sizing: border-box;
  width: 90%;
  padding: 20px;
  margin: 10px;
  transition: all 0.3s;

  &:hover,
  :active {
    background-color: #dfe4ea;
  }
`;

const Title = styled.h4`
  margin: 3px 0;
  font-weight: 600;
  & > span {
    color: #2e86de;
  }
`;

const Content = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
`;
