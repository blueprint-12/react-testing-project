import React, { useState, useRef } from "react";

import useDebounce from "../shared/useDebounce";
import { useSearchResult } from "../shared/api";

import VSearchInput from "../views/VSearchInput";
import VList from "../views/VList";

import Header from "../components/Header";
import Error from "../components/Error";
import InfiniteList from "../components/InfiniteList";
import SearchList from "../components/SearchList";

function MainPage() {
  const [word, setWord] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setWord(e.target.value);
  };

  //단어 유효성 검사는 어떻게 하는 게 좋을까.
  /*
  const validateSearchWord = (word) => {
    return !word === null && word === "" ? true : false;
  };
  */

  //useDebounce(단어, 딜레이 시간)
  let searchWord = useDebounce(word, 1000);

  const onClickContainer = () => {
    inputRef.current.focus();
  };

  const { data, isError, status } = useSearchResult(searchWord);

  if (isError) {
    return null;
  }

  return (
    <>
      <Header>
        <h1>Have a good Day</h1>
        <p>게시물을 검색해보세요.</p>
        <VSearchInput
          onClick={onClickContainer}
          value={word}
          onChange={onChangeInput}
          refValue={inputRef}
        />
      </Header>
      <VList>
        {status === "idle" ? (
          <InfiniteList />
        ) : isError ? (
          <Error>예상치 못한 에러가 발생했습니다.</Error>
        ) : (
          <SearchList list={data} />
        )}
      </VList>
    </>
  );
}

export default MainPage;
