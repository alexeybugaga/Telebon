import React from 'react';
import { Info } from './Info';
import { Title } from './Title';
import styles from './topbar.scss';

export function TopBar() {
  return (
    <div className={styles.topbar}>
      <Title />
      <Info />
    </div>
  );
}
