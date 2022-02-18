import React, { ReactNode } from 'react';
import { postProp } from '../types/posts';
import PageContainer from './Main';

export const PostContainer = ({
  children,
  post
}: {
  children: ReactNode;
  post: postProp;
}) => {
  return (
    <PageContainer
      title={`Sander van Ast — ${post.title}`}
      description={post.description}
      date={new Date(post.date).toISOString()}
      type='article'
    >
      <article>
        <div>
          <div>
            <h1 className="header">{post.title}</h1>
            <p >{post.date}</p>
          </div>
        </div>
        {children}
      </article>
    </PageContainer>
  );
};

export default PostContainer;
