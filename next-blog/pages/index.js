import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import axios from "axios";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  console.log(allPostsData);
  try {
    const jsonPlaceHolderData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    //받아온 데이터 배열을 10개까지만 끊어서 사용

    const result = jsonPlaceHolderData.data.slice(0, 10);

    return {
      props: { result },
    };
  } catch (error) {
    console.log(error.response.status, error.response.statusText);

    //응 에러나면 기본값줄거야
    return {
      props: {
        result: [{ id: "id 404", title: "title 404", body: "body 404" }],
      },
    };
  }
}

// export async function getStaticPaths() {
//   const res = await fetch("주소");
//   const posts = await res.json();

//   //원하는 posts로 구성된 paths를 pre-render한다.
//   const paths = posts.map((post) => {
//     params: {
//       id: post.id;
//     }
//   });

//   // fallback: false 이외의 다른 경로는 404페이지로 보낸다는 것을 의미
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`https ~ posts/${params.id}`);
//   const post = await res.json();

//   return { props: { post } };
// }

// function Post({ post }) {
//   //렌더링될 애
// }

export default function Home({ result }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>안녕하세요. 감자나라 왕자 감자입니다.</p>
        <p>
          넥스트 js를 통해 더 많은 지식을 알고 싶으시다면 링크를 클릭해주세요!
          <a href="https://nextjs.org/learn"> Here is Next.js tutorial</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>▼Blog Contents▼</h2>
        <ul className={utilStyles.list}>
          {result.map(({ id, title, body }) => (
            <li className={utilStyles.listItem} key={id}>
              Title : <b>{title}</b>
              <br />
              <i>{body}</i>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
