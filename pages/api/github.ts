import type { NextApiRequest, NextApiResponse } from 'next';
import { repoProps } from '../../types/repos';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const userResponse = await fetch('https://api.github.com/users/SANDR7', {
        headers: {
            "Authorization": `Token ${process.env.GITHUB_FETCH_KEY}`
        }
    });
    const userReposResponse = await fetch(
        'https://api.github.com/users/SANDR7/repos?per_page=3&sort=pushed', {
        headers: {
            "Authorization": `Token ${process.env.GITHUB_FETCH_KEY}`
        }
    }
    );

    const user = await userResponse.json();
    const repositories = await userReposResponse.json();
    const latest_repos: any[] = [];
    repositories.map((repo: repoProps) => latest_repos.push({
        name: repo.name,
        full_name: repo.full_name,
        language: repo.language,
        description: repo.description,
        topics: repo.topics,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
    }));

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({
        username: user.login,
        follower: user.followers,
        public_repos: user.public_repos,
        latest_repos,
    });
}