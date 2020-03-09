import * as React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
&&& {
  position: absolute;
  top: -18px;
  right: 25px;
  background-color: #0b7261;
}
`;

const CompileButton = ({ onClick }: any) => {
  return (
    <StyledButton 
      variant="contained" 
      color="secondary"
      onClick={onClick}
    >
      Compile
    </StyledButton>
  )
};

export default CompileButton;
