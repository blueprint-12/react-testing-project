## next-blog(next.js 테스팅 폴더)

### how to start?
* 이미 패키지 매니저가 설치되어 있다는 것을 전제로 함(저는 npm 말고 yarn을 사용했습니다.)
```bash
yarn add create-next-app 
yarn create-next-app next-blog(혹은 원하는 폴더명)
yarn cd next-blog 
yarn dev // 개발 모드에서 next.js실행, npm의 경우, npm run dev
```
> create-react-app 에서 ```npm run start``` 명령어(개발환경 실행)가 create-next-app 에서는 ```npm run dev```입니다.  
yarn 의 경우, run을 빼면 동일한 명령어입니다. 배포시 next.js에서는 ```yarn build → start``` 순서
