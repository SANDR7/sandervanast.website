import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

const GithubData = () => {
  const { data } = useSWR<{
    latest_repos: [];
    username: string;
    followers: number;
  }>('/api/github', fetcher);
  const repoData = data;
  return repoData;
};

export default GithubData;
