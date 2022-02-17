import matter from 'gray-matter';
import path from 'path';
import React from 'react';
import fs from 'fs';
import PageContainer from '../../layout/Main';
import { POSTS_PATH, postFilePaths } from '../../utils/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

export const Story = ({
  source,
  frontMatter
}: {
  source: any;
  frontMatter: any;
}) => {
  return (
    <PageContainer>
      {frontMatter.title}
      <MDXRemote {...source} />
    </PageContainer>
  );
};

export default Story;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

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
