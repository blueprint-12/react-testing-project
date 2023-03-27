## 현재 폴더
> 검색 결과를 기준으로 서버 데이터를 가져와 무한 스크롤을 구현했습니다.
**기간**: 10월 24 ~ 30일, 2022

[1. 실행 방법](#실행-방법)  
[2. 구현 사항](#구현-사항)  
[3. 설치 패키지](#설치-패키지)  
[4. 트러블 슈팅](#트러블-슈팅)

### 실행 방법
```bash
yarn && yarn start
```

### 구현 사항

    1. 게시물 무한 스크롤 ✅
    2. 검색바 UI 구현 ✅
    3. 게시물 리스트 구현 ✅
    4. 게시물 상세 페이지 ✅
    ---------only for A List-------
    5. 검색 기능 debounce 적용 ✅
    6. 탭 UI 구현(A,B 섹션 구분)
    7. 게시물 상세페이지에서 뒤로가기 버튼을 눌러도 기존의 검색 내용, 탭 상태, 게시물 리스트 불러오기


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
### 트러블 슈팅

[리액트 쿼리를 사용한 무한 스크롤 기능 관련 이슈 정리](https://blueprint-12.tistory.com/268)


