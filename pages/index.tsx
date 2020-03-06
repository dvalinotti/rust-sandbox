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
}
`;

const PageSubtitle = styled(Typography)`
&&& {
  padding-bottom: 30px;
  color: rgba(0,0,0,0.6)
}
`;

function HomePage() {
  return (
    <Layout title="Index">
      <Container maxWidth="md">
        <StyledPaper elevation={2}>
          <PageTitle variant="h4">Rust Sandbox</PageTitle>
          <PageSubtitle variant="body2">
            Run Rust programs in your web browser!
          </PageSubtitle>
          <CodeEditor />
        </StyledPaper>
      </Container>
    </Layout>
  )
};

export default HomePage;
