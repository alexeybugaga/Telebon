import React from 'react';
import { MenuConditions } from '../MenuConditions';
import { MenuPolicy } from '../MenuPolicy';
import { MenuSupport } from '../MenuSupport';
import styles from './block4.scss';

export function Block4() {
  return (
    <ul className={styles.block4}>
      <MenuSupport />
      <MenuConditions />
      <MenuPolicy />
    </ul>
  );
}
