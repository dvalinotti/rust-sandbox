import React from 'react';
import Layout from '../components/common/Layout';
import { Container, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';
import CodeEditor from "../components/CodeEditor";

const StyledPaper = styled(Paper)`
&&& {
  padding: 30px;
  margin-top: 30px;
}
`;

const PageTitle = styled(Typography)`
&&& {
  padding-top: 20px;
  color: white;
  position: relative;
  z-index: 1;
  font-weight: 700;
}
`;

const PageTitleUnderline = styled.div`
  position: relative;
  left: -10px;
  bottom: 17px;
  height: 20px;
  width: 250px;
  background-color: #2e2459;
  z-index: 0;
`;

const PageSubtitle = styled(Typography)`
&&& {
  color: rgba(255,255,255,0.9);
  margin-top: -10px;
}
`;

function HomePage() {
  return (
    <Layout title="Index">
      <Container maxWidth="md">
        <PageTitle variant="h4">Rust Sandbox</PageTitle>
        <PageTitleUnderline />
        <PageSubtitle variant="body2">
          Run Rust programs in your web browser!
        </PageSubtitle>
        <StyledPaper elevation={2}>
          <CodeEditor />
        </StyledPaper>
      </Container>
    </Layout>
  )
};

export default HomePage;
