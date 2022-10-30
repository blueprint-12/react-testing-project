import React, { useEffect } from "react";

import { usePostA } from "../shared/api";
import { useInView } from "react-intersection-observer";

import Item from "./Item";
import Error from "./Error";
import Spinner from "./Spinner";
import NomoreContent from "./NomoreContent";

function InfiniteList() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    usePostA();

  useEffect(() => {
    if (!data) return;

    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "error") return <Error>서버 에러</Error>;

  return (
    <>
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.itemListA.map((item) => (
            <Item key={item.id} {...item}></Item>
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage ? (
        <Spinner />
      ) : hasNextPage ? (
        <div ref={ref}></div>
      ) : (
        <NomoreContent>no more contents</NomoreContent>
      )}
    </>
  );
}

export default InfiniteList;
