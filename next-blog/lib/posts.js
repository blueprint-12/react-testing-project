import fs from "fs";
import path from "path";
import matter from "gray-matter";

//fs는 Node.js의 파일시스템 모듈로 파일을 읽어주는 역할
//path 노드 모듈로 파일 경로를 조작할 수 있게 해줌
//matter 각 마크다운 파일의 메타데이터를 구문 분석할 수 있는 라이브러리
//Next.js에서 lib 폴더에는 할당된 이름(e.g. pages폴더)이 없으므로 아무렇게나 정해주면된다.
//보통 폴더명은 lib 혹은 utils 로 짓는 것이 관례입니다.

const postsDirectory = path.join(process.cwd(), "posts");

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
