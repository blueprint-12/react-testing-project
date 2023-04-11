import Animation from "../animation";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. W.H.입니다.
          <br className="hidden lg:inline-block" />
          즐거운 하루 되세요.
        </h1>
        <p className="mb-8 leading-relaxed">
          한 폴더에 react 프로젝트와 next 프로젝트를 같이 두지마세요! eslint
          config에러를 마주하게 될 것입니다. 무엇이 문제인 지 모를 때에는 에러
          코드를 천천히 읽어보시면 보통은 해결이 됩니다. 덕분에 프로젝트
          세팅하는 법에 대해서 공부하는 계기가 됐습니다. Vercel 배포 실패가 너무
          많아서 창피스럽습니다. 무시해주세요.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/projects")}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
