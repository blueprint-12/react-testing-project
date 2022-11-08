---
title: "When to Use Static Generation v.s. Server-side Rendering"
date: "2020-01-02"
---

위에 있는 메타 데이터는 YAML Front Matter입니다.

야믈 프론트 매터는 gray-matter 이라는 라이브러리를 사용하여 파싱될 수 있습니다. yarn add gray-matter 필요
파일 시스템에 있는 데이터를 파싱해야하니 유틸리티 펑션을 만들어줍니다.
-> 유틸리티 펑션을 만듦으로써 마크다운 펑션의 타이틀과 데이터 그리고 파일이름(URL의 id로 활용되는 것)을 얻을 수 있습니다.
-> index 페이지에 데이터를 소팅하여 나열할 수 있습니다.
YAML은(데이터 전송 파일이라고 생각하면 됩니다 참고 자료:https://www.inflearn.com/questions/16184)
YAML은 구성 파일 작성에 자주 사용되는 데이터 직렬화 언어입니다.
We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
