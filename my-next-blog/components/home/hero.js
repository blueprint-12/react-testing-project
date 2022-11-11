import Animation from "../animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. W.H.입니다.
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩합시다!
        </h1>
        <p className="mb-8 leading-relaxed">
          보이는 끓는 사랑의 황금시대를 커다란 끓는다. 가치를 소금이라 무한한
          충분히 고행을 속잎나고, 곳으로 뿐이다. 이것을 같이, 이상의 것이다.
          이상은 얼마나 얼마나 싸인 충분히 열매를 가는 위하여서. 불어 온갖
          실현에 영락과 쓸쓸한 이는 대한 끓는다. 어디 보이는 보이는 발휘하기
          우리는 못하다 그들에게 쓸쓸하랴? 들어 속에 뜨고, 관현악이며, 갑 길을
          그들에게 것이다. 더운지라 품고 모래뿐일 사랑의 이상이 품에 우리는
          그들의 아니다. 하여도 사랑의 보이는 노년에게서 힘차게 있을 청춘은
          인간의 눈이 운다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
