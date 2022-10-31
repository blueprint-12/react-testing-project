## . 폴더
### 필수 구현사항

    1. 게시물 무한 스크롤 ✅
    2. 검색바 UI 구현 ✅
    3. 게시물 리스트 구현 ✅
    4. 게시물 상세 페이지 ✅
    ---------only for A List-------
    5. (선택) 검색어 debounce 적용 ✅
    6. (선택) 탭 UI 구현(A,B 섹션 구분)
    7. (선택) 게시물 상세페이지에서 뒤로가기 버튼을 눌러도 기존의 검색 내용, 탭 상태, 게시물 리스트 불러오기

### 설치 패키지

- axios(http 통신)

```bash
yarn add axios
```

- 스타일드 컴포넌트(CSS in JS)

```bash
yarn add styled-components
```

- react-spinners(로딩 스피너)

```bash
yarn add react-spinners
```

- react-icons(서치 아이콘)

```bash
yarn add react-icons
```

- 리액트 인터섹션 옵저버(무한스크롤 기능)

```bash
yarn add react-intersection-observer
```

- 리액트 쿼리(서버 데이터 관리)

```bash
 yarn add react-query
```

- 라우팅 처리

```bash
yarn add react-router-dom
```
### ❌트러블 슈팅

[리액트 쿼리를 사용한 무한 스크롤 기능 관련 이슈 정리](https://blueprint-12.tistory.com/268)

==========================================================================================

## next-blog(next.js 테스팅 폴더)

### how to start?
* 이미 패키지 매니저가 설치되어 있다는 것을 전제로 함(저는 npm 말고 yarn을 사용합니다.)
```bash
yarn add create-next-app 
yarn create-next-app next-blog(혹은 원하는 폴더명)
yarn cd next-blog 
yarn run dev // 개발 모드에서 next.js실행
```

