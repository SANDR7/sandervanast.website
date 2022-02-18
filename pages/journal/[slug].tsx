// next
import React from 'react';
import matter from 'gray-matter';

// layout
import PageContainer from '../../layout/Main';
import { GetStaticPaths, GetStaticProps } from 'next';

// utils
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { postProp } from '../../types/posts';
import { postFilePaths, getFilePath, getSource } from '../../utils/mdx';

export const Story = ({
  source,
  frontMatter
}: {
  source: any;
  frontMatter: postProp;
}) => {
  return (
    <PageContainer {...frontMatter}>

      <h1 className='header'>

      {frontMatter.title}
      </h1>
      <MDXRemote {...source} />
    </PageContainer>
  );
};

export default Story;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = getFilePath(`${params?.slug}.mdx`);
  const source = getSource(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
