import * as gvar from "./global_variables";
import { api } from "./axios";
import { useQuery, useInfiniteQuery } from "react-query";

// A포스트 가져오기
const getPostA = async (pageParam) => {
  const res = await api.get(
    `/recruit/${gvar.MY_TOKEN}/a-posts?page=${pageParam}`
  );
  const itemListA = res.data;
  let isLast = pageParam >= 9 ? true : false;

  return { itemListA, nextPage: pageParam + 1, isLast };
};

export const usePostA = () => {
  return useInfiniteQuery(
    "itemListA",
    ({ pageParam = 0 }) => getPostA(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
    }
  );
};

//검색 결과 포스트 가져오기
const getSearchPost = async (word, pageParam) => {
  const res = await api.get(
    `/recruit/${gvar.MY_TOKEN}/a-posts?page=${pageParam || 0}&search=${
      word || ""
    }`
  );
  const searchResult = res.data;

  return searchResult;
};

export const useSearchResult = (searchWord) => {
  return useQuery(["searchWord", searchWord], () => getSearchPost(searchWord), {
    enabled: !!searchWord,
    select: (result) => result.slice(0, 10),
    onError: (err) => console.log(err),
  });
};

//id에 해당하는 상세 정보 가져오기
const getItemDetailInfo = async (postId) => {
  const res = await api.get(`/recruit/${gvar.MY_TOKEN}/a-posts/${postId}`);
  const itemDetailInfo = res.data;
  return itemDetailInfo;
};

export const useItemDetailInfo = (postId) => {
  return useQuery(["itemDetail", postId], () => getItemDetailInfo(postId), {
    enabled: !!postId,
    onError: (err) => console.log(err),
  });
};
