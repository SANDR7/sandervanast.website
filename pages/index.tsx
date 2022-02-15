// next
import type { NextPage } from 'next';
import Profile from '../components/Profile';
import RepositoryCard from '../components/RepositoryCard';
// layouts
import PageContainer from '../layout/Main';
import Row from '../layout/Row';

// utils
import useSWR from 'swr';
import { repoProps } from '../types/repos';

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR('/api/github', fetcher);
  return (
    <>
      <PageContainer>
        <div className="Row">
          <Profile
            name="Sander van Ast"
            title="Frontend Designer"
            bio="Developing a solution for You"
            avatar="https://github.com/SANDR7.png"
            portrait="./portrait.png"
          />
        </div>
        <div className="Row">
          <Row
            title="Currently working on"
            linkNewTab
            link={{
              name: 'See all projects',
              url: 'https://github.com/SANDR7?tab=repositories'
            }}
          >
            <div className="flex gap-6 flex-col md:flex-row">
              {data ? (
                data.latest_repos.map((repo: repoProps, idx: number) => (
                  <RepositoryCard
                    key={idx}
                    language={repo.language}
                    topics={repo.topics}
                    full_name={repo.full_name}
                    description={repo.description}
                    name={repo.name}
                    html_url={repo.html_url}
                    stargazers_count={repo.stargazers_count}
                  />
                ))
              ) : (
                <p>loading...</p>
              )}
            </div>
          </Row>
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
