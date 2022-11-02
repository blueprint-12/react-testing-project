import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
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
    </Layout>
  );
}
