## **📚사용 패키지**

**테일윈드 설정**  
(config 파일은 항상 root에)

```bash
yarn add -D tailwindcss
npx tailwindcss init # 테일윈드 컨피그 파일 생성 명령어(tailwind.config.js)

```

-> tailwind.config.js 의 content 배열 값은 next.js에 맞춘 설정이 있습니다.
아래와 같이 파일 내용을 수정해주면 됩니다.
추가로 "다크 모드"를 사용할 것이라 더해주었습니다.

> tailwindw.config.js에 perge 옵션 추가(빌드 시 파일 크기 최소화)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  //파일 크기 최소화 purge옵션
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // 다크 모드 추가
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

> postcss.config.js 파일 따로 설정

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

> 테일윈드 확장 플러그인 설치

- vscode 마켓에서 tailwind css intelisense 추가
