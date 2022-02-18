import matter from 'gray-matter';
import React from 'react';
import PageContainer from '../layout/Main';
import { getSources, postFilePaths } from '../utils/mdx';
import { NextPage } from 'next';
import { postProps } from '../types/posts';
import Hero from '../components/Hero';
import Link from 'next/link';

const Journal: NextPage<postProps> = ({ posts }) => {
  return (
    <PageContainer>
      <Hero name="My Collection" bio="something" />
      <div className="grid gap-10">
        {posts &&
          posts.map(({ data: item }, idx: number) => {
            let categoryColor = '';
            switch (item.category) {
              case 'Development':
                categoryColor = 'border-l-orange';
                break;
              case 'Graphic Design':
                categoryColor = 'border-l-blue';
                break;
              case 'Strategy':
                categoryColor = 'border-l-red';
                break;
              case 'Technology':
                categoryColor = 'border-l-green';
                break;
              default:
                categoryColor = 'border-l-transparent';
                break;
            }
            return (
              <Link
                key={idx}
                href={`/journal/${item?.filePath.replace(/\.mdx?$/, '')}`}
                passHref
              >
                <a>
                  <div className="p-4">
                    <span>
                      <div
                        className={`${categoryColor} border-transparent border rounded-md p-2 py-1 my-2 w-min`}
                      >
                        {item.category}
                      </div>
                    </span>
                    <div>
                      <h2 className="header">{item.title}</h2>
                      <p className="text-gray-mid">{item.description}</p>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
      </div>
    </PageContainer>
  );
};
export default Journal;

export const getStaticProps = () => {
  const posts = postFilePaths.map((filePath) => {
    const source = getSources(filePath);
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath
    };
  });

  return { props: { posts } };
};
