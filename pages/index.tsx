// next
import type { NextPage } from 'next';
import Profile from '../components/Profile';
// layouts
import PageContainer from '../layout/Main';

const Home: NextPage = () => {
  return (
    <>
      <PageContainer>
        <div className="Row">
          <Profile
            name="Sander van Ast"
            title='Frontend Designer'
            bio="Developing a solution for You"
            avatar="https://github.com/SANDR7.png"
            portrait="./portrait.png"
          />
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
