import matter from 'gray-matter';
import React from 'react';
import PageContainer from '../layout/Main';
import { getSource, postFilePaths } from '../utils/mdx';
import { NextPage } from 'next';
import { postProps } from '../types/posts';
import Hero from '../components/Hero';

const Journal: NextPage<postProps> = ({ posts }) => {
  return (
    <PageContainer>
      <Hero name="My Collection" bio="something" />
      <div className="grid gap-10">
        {posts &&
          posts.map((item, idx: number) => {
            let categoryColor = '';
            switch (item.data.category) {
              case 'Development':
                categoryColor = 'bg-orange';
                break;
              case 'Graphic Design':
                categoryColor = 'bg-blue';
                break;
              case 'Strategy':
                categoryColor = 'bg-red';
                break;
              case 'Technology':
                categoryColor = 'bg-green';
                break;
              default:
                categoryColor = 'bg-transparent'
                break;
            }
            return (
              <div key={idx} className="Card p-4 rounded-lg">
                <div>
                  <div className={`${categoryColor} rounded-md text-gray-light p-2 my-2 w-min`}>{item.data.category}</div>
                </div>
                <h2 className="header">{item.data.title}</h2>
              </div>
            );
          })}
      </div>
    </PageContainer>
  );
};
export default Journal;

export const getStaticProps = () => {
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
};
