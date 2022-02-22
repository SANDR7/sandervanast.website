import Link from 'next/link';
import React from 'react';
import PageContainer from '../layout/Main';
import Row from '../layout/Row';

const Custom404 = () => {
  return (
    <PageContainer title="Sander van Ast — Page not Found">
      <Row title="404 found">
        <p className="textMidGray w-1/2">
          Well... You discoverd the 404 page. How did you get here? What was the
          reason to go this path? Because there is nothing interesting here...
        </p>
      </Row>
      <button className="flex justify-center w-full">
        <Link href="/">
          <a className="Card p-4 rounded-lg">Go to Home</a>
        </Link>
      </button>
    </PageContainer>
  );
};

export default Custom404;
