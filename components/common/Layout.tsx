import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const StyledLayout = styled.div`
  margin: 20;
  padding: 20;
  border: '1px solid #ddd'
`;

const Layout: React.FunctionComponent<Props> = ({ children, title }: Props) => (
  <StyledLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
      </nav>
    </header>
    {children}
  </StyledLayout>
);

export default Layout;
