### 하위 폴더 설명
1. **my-next-blog** `nextJS + tailwindCSS + notion API 를 활용한 블로그 사이트`

2. **next-blog** `nextJS 공식문서 기반의 테스팅 폴더, 개념 숙지용`

## react-testing-project
> 리액트 쿼리를 활용하여 서버 데이터를 관리하고 검색 결과를 불러오는 테스팅 프로젝트 입니다. 

**기간**: 10월 24 ~ 30일, 2022

[1. 실행 방법](#실행-방법)  
[2. 구현 사항](#구현-사항)  
[3. 설치 패키지 및 사용 스택](#설치-패키지)  
[4. 트러블 슈팅](#트러블-슈팅)   
[5. 논의할 point](#논의할-point)


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

📌사용 스택: `react-query(상태 관리)`, `JavaScript`, `styled-components(CSS in JS)`, `axios(HTTP)`, `react-router-dom(v6)`

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

### 트러블 슈팅

[리액트 쿼리를 사용한 무한 스크롤 기능 관련 이슈 정리](https://blueprint-12.tistory.com/268)

### 논의할 point
> **react의 Suspense를 정말 잘 사용하고 있을까?**  
  
:하단의 아티클에서는 suspense를 react-query와 같이 사용했을 때, 성능 저하 이슈를 겪은 문제를 제시하고 분석하고 있습니다.   
저는 suspense를 남발하거나 한 컴포넌트에서 여러 개의 api콜을 하고 있지 않기 때문에 해당 사항이 없었지만  
한 컴포넌트에서 여러 개의 api콜을 할 때, Suspense로 인해 api 콜에서 waterfall 현상이 발생한다고 합니다.  
`-> useQueries훅을 사용하면 되지않나? A. react-query v3에서 useQueries는 서스펜스와 에러 바운더리를 지원하지 않고 있습니다. `  
<hr/>

http 요청에서 waterfall현상이 발생한다는 의미? `본래 병렬로 되어야할 api 호출이 순차적으로 호출되어 로딩시간이 지연된다는 의미`,  
즉, 로딩 성능의 저하를 초래합니다. 이 부분은 react-query v4의 useQueries(서스펜스와 에러 바운더리를 지원합니다.)에서 개선되었다고 합니다.

[무분별한 suspense활용 with react-query](https://happysisyphe.tistory.com/54)




