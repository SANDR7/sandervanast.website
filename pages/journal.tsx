import matter from 'gray-matter';
import React from 'react';
import PageContainer from '../layout/Main';
import { getSources, postFilePaths } from '../utils/mdx';
import { NextPage } from 'next';
import { postProps } from '../types/posts';
import Hero from '../components/Hero';
import Link from 'next/link';
import { catColor } from '../utils/catColor';

const Journal: NextPage<postProps> = ({ posts }) => {
  return (
    <PageContainer>
      <Hero
        name="My journal stories"
        description="Here is were I keep my deepest secrets and interesting stories that I might share"
      />
      <div className="grid gap-10">
        {posts &&
          posts.map((item, idx: number) => {
            const { data: post } = item;

            let categoryColor = catColor(post.category);
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
                      <p className="textMidGray">{post.description}</p>
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
