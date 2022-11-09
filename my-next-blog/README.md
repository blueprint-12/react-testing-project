## **📚사용 패키지**

- tailwindcss v3.2.2
- autoprefixer v10.4.13
- postcss v8.4.18

**테일윈드 설정**  
(config 파일은 항상 root에)

```bash
yarn add -D tailwindcss
npx tailwindcss init # 테일윈드 컨피그 파일 생성 명령어(tailwind.config.js)

```

→ tailwind.config.js 의 content 배열 값은 next.js에 맞춘 설정이 있습니다.
아래와 같이 파일 내용을 수정해주면 됩니다.
추가로 "다크 모드"를 사용할 것이라 더해주었습니다.

> ❌주의 사항: tailwind.config.js에 purge 옵션을 넣지마세요. (v3 부터는 지원하지 않습니다. 해당 옵션을 사용 시 css가 적용되지 않습니다. )

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

> postcss.config.js 파일 따로 설정

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

> 테일윈드 관련 확장 플러그인 설치( vscodee exntensions)

1. "tailwind css intelisense" 추가
2. "tailwind css highlught" 추가 (세팅에서 borderRadius 0.25rem(defualt) -> 0 으로 변경)
