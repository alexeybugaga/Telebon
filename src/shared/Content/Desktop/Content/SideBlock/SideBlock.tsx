import React from 'react';
import { Calendar } from '../../../../CommonComponents/Calendar';
import { Indicators } from '../../../../CommonComponents/Indicators';
import styles from './sideblock.scss';

export function SideBlock() {
  return (
    <div className={styles.sideblock}>
      <Calendar />
      <Indicators />
    </div>
  );
}
