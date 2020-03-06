import React from 'react';
import Layout from '../components/common/Layout';
import { Container, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';
import CodeEditor from "../components/CodeEditor";
import CompileButton from "../components/CompileButton";
import TerminalOutput from "../components/TerminalOutput";
import fetch, {Response} from 'node-fetch';

const StyledPaper = styled(Paper)`
&&& {
  padding: 30px;
  margin-top: 30px;
  position: relative;
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
  background-color: #a72145;
  z-index: 0;
`;

const PageSubtitle = styled(Typography)`
&&& {
  color: rgba(255,255,255,0.9);
  margin-top: -10px;
}
`;

type CompilerResponse = {
  response: string;
};

function HomePage() {
  const [terminalContent, setTerminalContent] = React.useState<string>("");
  const [editorContent, setEditorContent] = React.useState<string>(defaultValue);

  const updateEditor = (event: string) => {
    setEditorContent(event);
    console.log(editorContent);
  }

  const submitCode = () => {
    setTerminalContent("Compiling...");
    
    fetch("http://localhost:3000/api/compiler", {
      method: "POST",
      body: JSON.stringify({ main: editorContent })
    })
      .then((res: Response) => res.json())
      .then((json: CompilerResponse) => {
        console.log(json.response);
        setTerminalContent(json.response);
      })
      .catch((error: Error) => {
        console.log(error);
      })
  }

  return (
    <Layout title="Index">
      <Container maxWidth="md">
        <PageTitle variant="h4">Rust Sandbox</PageTitle>
        <PageTitleUnderline />
        <PageSubtitle variant="body2">
          Run Rust programs in your web browser!
        </PageSubtitle>
        <StyledPaper elevation={2}>
          <CompileButton onClick={submitCode} />
          <CodeEditor content={editorContent} updateContent={updateEditor} />
        </StyledPaper>
        <TerminalOutput content={terminalContent} />
      </Container>
    </Layout>
  )
};

const defaultValue = `fn main() { 
  println!("hello world"); 
}
`

export default HomePage;
