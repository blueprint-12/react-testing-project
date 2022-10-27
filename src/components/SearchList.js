import React from "react";
import Item from "./Item";
import NomoreContent from "./NomoreContent";

function SearchList({ list }) {
  return (
    <>
      {list?.length === 0 ? (
        <NomoreContent>검색 결과가 존재하지 않습니다.</NomoreContent>
      ) : (
        <React.Fragment>
          {list.map((item) => (
            <Item key={item.id} {...item}></Item>
          ))}
        </React.Fragment>
      )}
    </>
  );
}

export default SearchList;
