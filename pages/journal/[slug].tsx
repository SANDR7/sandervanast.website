import matter from 'gray-matter';
import React from 'react';
import PageContainer from '../../layout/Main';
import { postFilePaths, getFilePath, getSource } from '../../utils/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { postProp } from '../../types/posts';

export const Story = ({
  source,
  frontMatter
}: {
  source: any;
  frontMatter: postProp;
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
