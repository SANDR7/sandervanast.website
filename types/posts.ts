export interface postProps {
  posts: [{ data: postProp; filePath: string }];
  content: string;
  filePath: string;
}

export interface postProp {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  category: 'Graphic Design' | 'Technology' | 'Strategy' | 'Development';
  tags: string[];
}
