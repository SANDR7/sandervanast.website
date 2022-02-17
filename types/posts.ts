export interface postProps {
    posts: [{ data: postProp }];
    content: string;
    filePath: string;
}

export interface postProp {
    title: string;
    date: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
}