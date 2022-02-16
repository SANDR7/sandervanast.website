// next
import type { NextPage } from 'next';
import Profile from '../components/Profile';
import RepositoryCard from '../components/RepositoryCard';
// layouts
import PageContainer from '../layout/Main';
import Row from '../layout/Row';

// utils
import { repoProps } from '../types/repos';
import GithubData from '../components/data/github';

const Home: NextPage = () => {
  const github = GithubData();

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
            <div className="flex gap-4 flex-col md:flex-row">
              {github ? (
                github.latest_repos.map((repo: repoProps, idx: number) => (
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
