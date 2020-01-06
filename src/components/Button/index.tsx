import React, { ReactElement } from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  className?: string;
}

const Button = ({ className }: ButtonProps): ReactElement => {
  return <StyledButton className={`button ${className || ''}`}>Click Me again!</StyledButton>;
};

// export { Button };

export default Button;
