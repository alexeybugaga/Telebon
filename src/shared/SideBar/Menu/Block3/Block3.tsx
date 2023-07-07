import React from 'react';
import { MenuAnalytics } from '../MenuAnalytics';
import { MenuControls } from '../MenuControls';
import { MenuHelperAi } from '../MenuHelperAi';
import { MenuSettings } from '../MenuSettings';
import styles from './block3.scss';

export function Block3() {
  return (
    <ul className={styles.block3}>
      <MenuHelperAi />
      <MenuAnalytics />
      <MenuControls />
      <MenuSettings />
    </ul>
  );
}
