//404 페이지에 관한 것은 404.js로 커스텀이 가능하다.
import { NotFoundAnimation } from "../components/animation";
import Layout from "../components/layout";

export default function PageNotFound() {
  return (
    <Layout>
      <section className="flexs flex-col items-center justify-center text-gray-600 body-font min-h-screen">
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
          <h3 className="font-semibold md:text-3xl text-xl  my-1">
            You lost your way find Home!
          </h3>
          <NotFoundAnimation />
        </div>
      </section>
    </Layout>
  );
}
