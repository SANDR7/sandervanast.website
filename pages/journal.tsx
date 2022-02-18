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
      <Hero
        name="My Collection"
        description="Here is were I keep my deepest secrets and interesting stories that I might share"
      />
      <div className="grid gap-10">
        {posts &&
          posts.map((item, idx: number) => {
            const { data: post } = item;

            let categoryColor = '';
            switch (post.category) {
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
                href={`/journal/${item?.filePath?.replace(/\.mdx?$/, '')}`}
                passHref
              >
                <a>
                  <div>
                    <span>
                      <div
                        className={`${categoryColor} border-transparent border-2 rounded-lg p-2 py-1 my-2 w-full`}
                      >
                        {post.category}
                      </div>
                    </span>
                    <div>
                      <h3 className="header">{post.title}</h3>
                      <p className="text-gray-mid">{post.description}</p>
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
