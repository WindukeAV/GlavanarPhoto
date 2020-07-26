import React from 'react';
import styles from './Button.scss';

export interface ButtonProps {
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick
}) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};
