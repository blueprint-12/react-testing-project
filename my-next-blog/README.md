# ๐์ฌ์ฉ ํจํค์ง

- next 12.2.2
- react 18.2.0

## ์๋ฐ์ดํธ

**DATE**: <i>2022 11 12</i>

> โ์ฃผ์: env ๊ฐ์ ์๋ ๋ธ๋ผ์ฐ์ ์์ undefined์ด๋ ํ์ธ์ ํ๊ณ ์ถ๋ค๋ฉด ์๋ฒ์ฌ์ด๋์์ ํ์ธ

- dotenv 16.0.3 (env ํ์ผ ํ๊ฒฝ๋ณ์ ๊ฐ์ ธ์ค๊ธฐ์ฉ)

**DATE**: <i>2022 11 11</i>

> ๋กํฐ ์ ๋๋ฉ์ด์ ์ ์ฉ, ๋คํฌ ๋ชจ๋ ์ค์ 

- next-themes 0.2.1 (for dark theme)
- react-lottie-player 1.5.0 (๋กํฐํ์ผ(.json) ๋ฆฌ์กํธ์ ์ ์ฉ)

---

**DATE**: <i>2022 11 10</i>

> ํ์ผ์๋CSS ์ธํ์ ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น

- tailwindcss v3.2.2
- autoprefixer v10.4.13
- postcss v8.4.18

# ์ค์ 

### โ **notion API**

- ์์ฑํ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ์ ์ฒดํ๋ฉด์ผ๋ก ์ด๊ธฐ(open as full page) ํ ๋ค์์ ๋์ค๋ url์ ์์ด๋๊ฐ์ ๋ฃ์ด์ค์ผ ํ๋ค.
  > ?๋ฌผ์ํ ๋ค์ ๋ถ์ ์ฟผ๋ฆฌ๊ฐ์ get์์ฒญ์ ๋ณด๋ผ ๋, ์ค๋ฅ๋ฅผ ๋ฐ์์ํค๋ฏ๋ก ๊ทธ ์์ ๊ฐ๋ง ์ฌ์ฉ
- notion API 2022 06 28 ๋ฒ์  ์ฌ์ฉ

  > ์ฐ์ธก ์ต์๋จ์ ๋ฉ๋ด(...)๋ฒํผ์ ๋๋ฌ ๋ด๊ฐ ์์ฑํ connection์ ์ถ๊ฐํ๋ค.

- data list๋ฅผ ๊ฐ์ ธ์ฌ ๋๋ POST๋ก ์์ฒญํ๋ฉฐ, ํค๋์ Content-Type/Notion-Version/Accept๋ฅผ ์ถ๊ฐ ์ค์ ํด์ค์ผ ํ๋ค. ๋ฌผ๋ก , auth์ Bearer Token๊ฐ๋ ๋ฃ์ด์ค์ผ ํ๋ค.
  > ๋ฐ์ดํฐ๋ฅผ sorting(์ ๋ ฌ)ํ  ์ ์๋๋ฐ body์ json ํ์์ผ๋ก ๋๊ฒจ์ฃผ๋ฉด ๋๋ค. ์ด ์ฝ๋๋ ๋ธ์dev API ๊ณตํ์ ์๋ค.
  > [Notion dev sorting](https://developers.notion.com/reference/post-database-query-sort)

### โ **ํ์ผ์๋**

(config ํ์ผ์ ํญ์ root์)

```bash
yarn add -D tailwindcss
npx tailwindcss init # ํ์ผ์๋ ์ปจํผ๊ทธ ํ์ผ ์์ฑ ๋ช๋ น์ด(tailwind.config.js)

```

โ tailwind.config.js ์ content ๋ฐฐ์ด ๊ฐ์ next.js์ ๋ง์ถ ์ค์ ์ด ์์ต๋๋ค.
์๋์ ๊ฐ์ด ํ์ผ ๋ด์ฉ์ ์์ ํด์ฃผ๋ฉด ๋ฉ๋๋ค.
์ถ๊ฐ๋ก "๋คํฌ ๋ชจ๋"๋ฅผ ์ฌ์ฉํ  ๊ฒ์ด๋ผ ๋ํด์ฃผ์์ต๋๋ค.

> โ์ฃผ์ ์ฌํญ: tailwind.config.js์ purge ์ต์์ ๋ฃ์ง๋ง์ธ์. (v3 ๋ถํฐ๋ ์ง์ํ์ง ์์ต๋๋ค. ํด๋น ์ต์์ ์ฌ์ฉ ์ css๊ฐ ์ ์ฉ๋์ง ์์ต๋๋ค. )

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ๋คํฌ ๋ชจ๋ ์ถ๊ฐ
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

> postcss.config.js ํ์ผ ๋ฐ๋ก ์ค์ 

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

> **TIP** ํ์ผ์๋ ๊ด๋ จ ํ์ฅ ํ๋ฌ๊ทธ์ธ ์ค์น( vscodee exntensions)

1. "tailwind css intelisense" ์ถ๊ฐ
2. "tailwind css highlught" ์ถ๊ฐ (์ธํ์์ borderRadius 0.25rem(defualt) -> 0 ์ผ๋ก ๋ณ๊ฒฝ)

# Next rules

- ์ด๋ฏธ์ง ๋ฆฌ์์ค(e.g. ํ๋น์ฝ, ๋กํฐ ํ์ผ)->publicํด๋
