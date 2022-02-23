import React from 'react';
import Hero from '../components/Hero';
import PageContainer from '../layout/Main';
import Row from '../layout/Row';
import { ExternalLink } from '../utils/externalLink';

export const About = () => {
  return (
    <PageContainer title="About — Sander van Ast">
      <Hero
        name="About me"
        title="Sander van Ast"
        description="I am learning new skills every day and master them to the end."
        avatar="/avatar.png"
        portrait="/portrait.png"
      />

      <Row title="What I’m all about">
        <p className="w-full md:w-2/3">
          I love creating for the world wide web. Say websites and applications.
          Or Graphic designs, digital branding and Illustrations.
        </p>
        <br />
        <p className="w-full md:w-2/3">
          Currently enjoying myself by cycling, listening to music and wasting
          my time with lego technic models.
        </p>
      </Row>
      <Row title="And more">Education:</Row>
      <Row title="Here can you find me">
        <div>
          <table>
            <tr>
              <td>github: </td>
              <td>
                <ExternalLink
                  className="text-red font-semibold"
                  href="https://github.com/SANDR7"
                >
                  @SANDR7
                </ExternalLink>
              </td>
            </tr>
            <tr>
              <td>Dribbble: </td>
              <td>
                <ExternalLink
                  className="text-red font-semibold"
                  href="https://dribbble.com/SANDR7"
                >
                  @SANDR7
                </ExternalLink>
              </td>
            </tr>
            <tr>
              <td>Website: </td>
              <td>
                <ExternalLink
                  className="text-red font-semibold"
                  href="https://sandervanast.website"
                >
                  https://sandervanast.website
                </ExternalLink>
              </td>
            </tr>

            <tr>
              <td>LinkedIn:</td>
              <td>
                <ExternalLink
                  className="text-red font-semibold"
                  href="https://www.linkedin.com/in/sander-van-ast/"
                >
                  https://www.linkedin.com/in/sander-van-ast/
                </ExternalLink>
              </td>
            </tr>
          </table>
        </div>
      </Row>
    </PageContainer>
  );
};

export default About;
