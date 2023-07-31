import React from 'react';
import { MenuClients } from '../MenuClients';
import { MenuProduct } from '../MenuProduct';
import styles from './block2.scss';

export function Block2() {
  return (
    <ul className={styles.block2}>
      <MenuClients />
      <MenuProduct />
    </ul>
  );
}
