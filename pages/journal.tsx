import matter from 'gray-matter';
import React from 'react';
import PageContainer from '../layout/Main';
import { getSource, postFilePaths, POSTS_PATH } from '../utils/mdx';
import { NextPage } from 'next';
import { postProps } from '../types/posts';

const Journal: NextPage<postProps> = ({ posts }) => {
  return (
    <PageContainer>
      {posts &&
        posts.map((item, idx: number) => (
          <div key={idx}>{item.data.title}</div>
        ))}
    </PageContainer>
  );
};
export default Journal;

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = getSource(filePath);
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath
    };
  });

  return { props: { posts } };
}
