import React, { useContext } from 'react';
import { Block1 } from './Block1';
import { Block2 } from './Block2';
import { Block3 } from './Block3';
import { Block4 } from './Block4';
import styles from './menu.scss';


export function Menu() {

  return (
  <div className={styles.menu}>
    <Block1 />
    <Block2 />
    <Block3 />
    <Block4 />
  </div>
  );
}
