import React, { useState } from 'react';
import { Head } from './Head';
import { Menu } from './Menu';
import styles from './sidebar.scss';

interface ISideBarProps {
  toggleNumber?: number;
}

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Head />
      <Menu />
    </aside>
  );
}
