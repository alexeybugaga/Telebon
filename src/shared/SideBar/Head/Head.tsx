import React from 'react';
import styles from './head.scss';
import { Logo } from './Logo';
import { SwitchButton } from './SwitchButton';

export function Head() {
  return (
  <div className={styles.head}>
    <Logo />
    <SwitchButton />
  </div>
  );
}
