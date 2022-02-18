// next
import React from 'react';
import matter from 'gray-matter';

// layout
import PageContainer from '../../layout/Main';
import { GetServerSideProps } from 'next';

// utils
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { postProp } from '../../types/posts';
import { getFilePath, getSource } from '../../utils/mdx';
import PostContainer from '../../layout/Post';

export const Story = ({
  source,
  post
}: {
  source: any;
  post: postProp;
}) => {
  return (
    <PostContainer post={post}>
      <MDXRemote {...source} />
    </PostContainer>
  );
};

export default Story;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
      post: data
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = postFilePaths
//     .map((path) => path.replace(/\.mdx?$/, ''))
//     .map((slug) => ({ params: { slug } }));

//   return {
//     paths,
//     fallback: false
//   };
// };
