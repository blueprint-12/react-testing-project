import Image from "next/image";

export default function ProjectItem({ data }) {
  //이미지 넣을 때 오류 메세지
  /*
  Error: Invalid src prop (https://www.notion.so/images/page-cover/nasa_the_blue_marble.jpg) on `next/image`, 
  hostname "www.notion.so" is not configured under images in your `next.config.js`
  See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
  넥스트에서는 외부에서 이미지나 데이터를 가져올 때, 도메인이 설정되어있어야 한다. -> next.config.js 에서 설정
  우리가 사용하려는 source의 도메인 정보를 넣어줘야 한다.(e.g. 이미지의 출처가 어떤 경로에 오냐에 따라 도메인을 여러개 지정해줘야 할수도 있음 s3, notion, 이미지 사이트..등등 )
  
  //이미지 objectFit none-> 넘어가는 부분은 잘린다.
  // quality? 는 뭐야 
  //className="rounded-t-xl" 테일윈드 "둥그렇게 윗부분(top)만 xl 만큼"
  */
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const youtube = data.properties.Youtube?.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그?.multi_select;
  const start = data.properties.workPeriod.date.start ?? "2022-11-12";
  //endDate가 없는 경우, 지정하지 않거나 빈값일 경우, 오늘 날짜로 넣어준다.
  let altEndDateString = String(new Date().toLocaleDateString())
    .replaceAll(".", "-")
    .slice(0, -1);
  const end = data.properties.workPeriod.date?.end ?? altEndDateString;

  //시간 계산하는 로직
  const calcPeriod = (start, end) => {
    // 날짜 계산하는 로직
    // start,end 형식 예시 2022-11-05
    const startDateStringArr = start.split("-");
    const endDateStringArr = end.split("-");

    // new Date(year, month, date)
    let startDate = new Date(
      startDateStringArr[0], // 2022
      startDateStringArr[1], // 11
      startDateStringArr[2] //05
    );
    let endDate = new Date(
      endDateStringArr[0],
      endDateStringArr[1],
      endDateStringArr[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);
    // console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={github}>깃허브 바로 가기</a>
        <a href={youtube}>유투브 바로 가기</a>
        <p className="my-1 text-xg">
          작업기간 : {start} ~ {end} ({calcPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700"
              key={aTag.id}>
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
