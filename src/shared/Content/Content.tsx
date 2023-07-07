import React from 'react';
import styles from './content.scss';

interface IContentProps {
  children?: React.ReactNode;
}
export function Content({ children }: IContentProps) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
}
