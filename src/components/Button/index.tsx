import React, { ReactElement } from 'react';
import './styles.css';

export interface ButtonProps {
  className: string;
}

const Button = ({ className }: ButtonProps): ReactElement => {
  return <button className={`button ${className}`}>Click Me again!</button>;
};

// export { Button };

export default Button;
