import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import React from 'react';
import PageContainer from '../layout/Main';
import { postFilePaths, POSTS_PATH } from '../utils/mdx';

const Journal = ({ posts }: { posts: any }) => {
  console.log(posts);

  return <PageContainer>Stories?</PageContainer>;
};
export default Journal;

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath
    };
  });

  return { props: { posts } };
}
