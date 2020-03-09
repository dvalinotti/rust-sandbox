import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
&&& {
  margin-top: 15px;
  padding: 15px;
  background-color: black;
}
`;

const TerminalContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 200px;
  background-color: black;
`;

const TerminalContent = styled(Typography)`
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
&&& {
  padding: 12px;
  font-size: 14px;
  font-family: 'Source Code Pro', monospace;
  color: white;
}
`;

type Props = {
  content: string;
};

const TerminalOutput = ({ content }: Props) => {
  return (
    <StyledPaper elevation={3}>
      <TerminalContainer>
        <TerminalContent>
          Terminal Output:<br/>
          <div style={{lineHeight: '1px'}}>
            {content.split("\n").map((item, key) => (
              <p key={key}>
                { `\n${item}` }
              </p>
            ))}
          </div>
        </TerminalContent>
      </TerminalContainer>
    </StyledPaper>
  )
};

export default TerminalOutput;
