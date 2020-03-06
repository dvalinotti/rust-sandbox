import React from 'react';
import { TextField } from "@material-ui/core";
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const Editor = (props) => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default;
    require('ace-builds/src-noconflict/mode-rust');
    require('ace-builds/src-noconflict/theme-tomorrow');

    return <Ace {...props}/>
  }

  return null;
}

const StyledEditor = styled(Editor)`
&&& {
  width: 100% !important
}
`;

type Props = {
  content: string;
  updateContent: Function;
};

const CodeEditor = ({ content, updateContent }: Props) => {
  return (
    <Editor 
      mode="rust" 
      theme="tomorrow"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      showPrintMargin={false}
      fontSize={14}
      tabSize={2}
      value={content}
      onChange={updateContent}
    />
  );
}

export default CodeEditor;
