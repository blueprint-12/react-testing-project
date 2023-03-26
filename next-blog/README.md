## next-blog(next.js 테스팅 폴더)
> next.js를 활용해보는 테스팅 폴더입니다.
> 
### how to start?

- 이미 패키지 매니저가 설치되어 있다는 것을 전제로 함(저는 npm 말고 yarn을 사용했습니다.)

```bash
npx create-next-app@latest
# or
yarn create next-app next-blog(혹은 원하는 폴더명)
yarn cd next-blog
yarn dev // 개발 모드에서 next.js실행, npm의 경우, npm run dev
```

### 추가 설치 패키지

- Scss(Sass) 내부적으로 next.js가 해당 확장자를 지원하지만 사용하기 위해선 설치해야 합니다. 명령어에 -D 옵션은 빼도 됩니다.

```bash
npm i -D sass //sass를 설치하면 scss도 사용할 수 있습니다.
yarn add sass
```

> create-react-app 에서 `npm run start` 명령어(개발환경 실행)가 create-next-app 에서는 `npm run dev`입니다.  
> yarn 의 경우, run을 빼면 동일한 명령어입니다. 배포시 next.js에서는 `yarn build → start` 순서
