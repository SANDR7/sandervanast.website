// next
import type { NextPage } from 'next';
import Hero from '../components/Hero';
import RepositoryCard from '../components/RepositoryCard';
// layouts
import PageContainer from '../layout/Main';
import Row from '../layout/Row';

// utils
import { repoProps } from '../types/repos';
import GithubData from '../components/data/github';
import Card from '../components/Card';
import ServiceData from '../components/data/services';

const Home: NextPage = () => {
  const github = GithubData();
  const services = ServiceData();

  return (
    <>
      <PageContainer>
        <Hero
          name="Sander van Ast"
          title="Web Designer, Developer and Consumer"
          description="Contributing to the web by making it a bit prettier."
          avatar="https://github.com/SANDR7.png"
          portrait="/portrait.png"
        />
        <Row
          title="Currently working on"
          linkNewTab
          link={{
            name: 'See all projects',
            url: 'https://github.com/SANDR7?tab=repositories'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {github ? (
              github.latest_repos
                .slice(0, 3)
                .map((repo: repoProps, idx: number) => (
                  <RepositoryCard
                    key={idx}
                    language={repo.language}
                    topics={repo.topics}
                    full_name={repo.full_name}
                    description={repo.description}
                    name={repo.name}
                    html_url={repo.html_url}
                    homepage={repo.homepage}
                    stargazers_count={repo.stargazers_count}
                  />
                ))
            ) : (
              <p>loading...</p>
            )}
          </div>
        </Row>
        <Row
          title="Also interested in"
          description="Writing about the topics I like to learn is a good opportunity to share them with the world."
          link={{ name: 'See all Journal posts', url: '/journal' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <Card
              title="Development"
              image={{ url: '/static/images/banner.png', alt: 'banner' }}
            />
            <Card
              title="Strategy"
              image={{ url: '/static/images/banner.png', alt: 'banner' }}
            />
            <Card
              title="Graphic Design"
              image={{ url: '/static/images/banner.png', alt: 'banner' }}
            />
            <Card
              title="Technology"
              image={{ url: '/static/images/banner.png', alt: 'banner' }}
            />
          </div>
        </Row>
        <Row
        title='You can contact my for'
        link={{url: 'mailto:contact@sandervanast.info', name: 'contact@sandervanast.info'}}
        >
          {services && services.services.map((item: any,idx: number) => (
            <div key={idx}>
              {idx + 1} - {item.text}
            </div>
          ))}
        </Row>
      </PageContainer>
    </>
  );
};

export default Home;
