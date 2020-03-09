import React from 'react';

const Editor = (props: any | null) => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default;
    require('ace-builds/src-noconflict/mode-rust');
    require('ace-builds/src-noconflict/theme-tomorrow');

    return <Ace {...props}/>
  }

  return null;
}

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
