import React, { useEffect, useCallback } from "react";
import Item from "./Item";
import styled from "styled-components";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import Error from "./Error";

const ItemListCont = styled.ul`
  display: flex;
  flex-direction: column;
  width: 1000px;
  padding: 20px;
`;

const MY_TOKEN = process.env.REACT_APP_TOKEN;

const axiosDataB = () => {
  return axios.get("");
};

function ItemList() {
  const axiosDataA = useCallback(async (pageParam) => {
    const res = await axios.get(
      `https://recruit-api.yonple.com/recruit/${MY_TOKEN}/a-posts?page=${pageParam}`
    );
    const itemListA = res.data;
    let isLast = pageParam >= 9 ? true : false;

    return { itemListA, nextPage: pageParam + 1, isLast };
  }, []);

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      "itemListA",
      ({ pageParam = 0 }) => axiosDataA(pageParam),
      {
        getNextPageParam: (lastPage) =>
          !lastPage.isLast ? lastPage.nextPage : undefined,
      }
    );

  useEffect(() => {
    if (!data) return;

    if (inView) fetchNextPage();
  }, [inView, data, fetchNextPage]);

  //데이터가져오는 과정에서 에러가 발생했을 때,
  if (status === "error") return <Error />;
  console.log(data);
  return (
    <>
      <ItemListCont>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.itemListA.map((item) => (
              <Item key={item.id} {...item}></Item>
            ))}
          </React.Fragment>
        ))}
      </ItemListCont>
      {isFetchingNextPage ? (
        <div>로딩중</div>
      ) : hasNextPage ? (
        <div ref={ref}></div>
      ) : (
        <div>no more contents</div>
      )}
    </>
  );
}

//초기값 못불러 왔을 때 기본값 설정
ItemList.defaultProps = {
  listA_query: [],
};
export default ItemList;
