import React, { useContext } from 'react';
import { menuStateContext } from '../../../context/menuStateContext';
import { MenuClients } from '../MenuClients';
import { MenuProduct } from '../MenuProduct';
import styles from './block2.scss';

export function Block2() {
  const {menuNum, changeMenuNum} = useContext(menuStateContext);
  return (
    <ul className={styles.block2}>
      <MenuClients menuNumber={menuNum} changeMenuNumber={changeMenuNum}/>
      <MenuProduct menuNumber={menuNum} changeMenuNumber={changeMenuNum}/>
    </ul>
  );
}
