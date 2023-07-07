import React from 'react';
import styles from './button.scss';
import classnames from 'classnames';

interface IButton {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean; 
  className?: string;
  onClick?: (login: any) => void;
}

export function Button({children, type = 'submit', disabled = false, className, onClick = (login: any) => {}}: IButton) {
  return (
    <button
      className={className ? classnames(styles.button, className) : styles.button}
      type={type}
      disabled={disabled}
      onClick = {onClick}
    >
      {children}
    </button>
  );
}
