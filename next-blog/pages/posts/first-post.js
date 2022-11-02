import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div>
        넥스트에서 제공하는 Head컴포넌트를 사용하면 head태그에 title을 넣을 수
        있다.
      </div>
      <div>Link 컴포넌트는 client-side navigation</div>
      <h1>First Post </h1>
      <h2 style={{ color: "red" }}>
        <Link href="/">Back to home</Link>
      </h2>
      <div>
        next/image 의 Image 컴포넌트는 이미지를 리사이징 해주고 최적화해준다.
      </div>
      <Image
        src="/images/cat.jpg"
        height={144}
        width={144}
        alt="your mustache cat"
      />
    </Layout>
  );
}
