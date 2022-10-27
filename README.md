## 필수 구현사항

    1. 게시물 무한 스크롤
    2. 검색바 UI 구현
    3. 게시물 리스트 구현
    4. 게시물 상세 페이지
    5. (선택) 검색어 debounce 적용
    6. (선택) 탭 UI 구현(A,B 섹션 구분)
    7. (선택) 게시물 상세페이지에서 뒤로가기 버튼을 눌러도 기존의 검색 내용, 탭 상태, 게시물 리스트 불러오기

## 설치 패키지

- axios(http 통신)

```bash
yarn add axios
```

- 스타일드 컴포넌트(CSS in JS)

```bash
yarn add styled-components
```

- 로딩 스피너(react-spinners)

```bash
yarn add react-spinners
```

- 서치 아이콘(react-icons)

```bash
yarn add react-icons
```

- 리액트 인터섹션 옵저버(무한스크롤 기능 구현)

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

### 😎폴더구조

```
react-testing-project
│
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ components
│  │  ├─ Error.js
│  │  ├─ Header.js
│  │  ├─ InfiniteList.js
│  │  ├─ Item.js
│  │  ├─ NomoreContent.js
│  │  ├─ SearchList.js
│  │  └─ Spinner.js
│  ├─ index.css
│  ├─ index.js
│  ├─ pages
│  │  ├─ ItemDetailPage.js
│  │  └─ MainPage.js
│  ├─ shared
│  │  ├─ api.js
│  │  ├─ axios.js
│  │  ├─ global_variables.js
│  │  └─ useDebounce.js
│  ├─ styles
│  │  └─ reset.css
│  └─ views
│     ├─ VList.js
│     └─ VSearchInput.js

```
