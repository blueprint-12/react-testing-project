## **📚사용 패키지**

- 테일윈드

```bash
yarn add -D tailwindcss
npx tailwindcss init # 테일윈드 컨피그 파일 생성 명령어(tailwind.config.js)

```

-> tailwind.config.js 의 content 배열 값은 next.js에 맞춘 설정이 있습니다.
아래와 같이 파일 내용을 수정해주면 됩니다.
추가로 "다크 모드"를 사용할 것이라 더해주었습니다.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
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
