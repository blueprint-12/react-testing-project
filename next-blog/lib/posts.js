import fs from "fs";
import path from "path";
import matter from "gray-matter";

//✅2022 11 07 이슈 발생 fs 모듈은 node 모듈이라 서버 사이드 메소드 내부에서
//모듈을 임포트해서 사용하는 것이 아니라면, 해당 모듈을 쓸 수 없다는 에러 메세지를 보낸다.

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  //파일 이름들을 리스트로 반환(.md 제외)
  //반환된 목록은 단순한 문자열 배열이 아니라 아래와 같은 모양의 객체 배열이어야 합니다.
  //각 객체에는 키가 있어야 하고 params 키가 있는 객체를 포함해야 합니다.
  // [id]를 사용하기 때문입니다. 그렇지 않으면 getStaticPaths는 실패합니다.

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
