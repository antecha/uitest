import React, { ReactElement } from 'react';
import styled from 'styled-components';

import './styles.css';

const StyledButton = styled.button`
  background-color: #fff;
  height: 40px;
  border: 1px solid red;
  border-radius: 4px;
`;

export interface ButtonProps {
  className: string;
}

const Button = ({ className }: ButtonProps): ReactElement => {
  return <StyledButton className={`button ${className}`}>Click Me again!</StyledButton>;
};

// export { Button };

export default Button;
