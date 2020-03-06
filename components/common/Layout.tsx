import React from 'react';
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
    {children}
  </StyledLayout>
);

export default Layout;
