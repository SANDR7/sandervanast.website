export interface postProps {
  content: string;
  data: postProp;
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
