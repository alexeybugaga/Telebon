import React from 'react';
import { useSelector } from 'react-redux';
import { RooState } from '../../../../store/reducer';
import { MenuCall } from '../MenuCall';
import { MenuDeskTop } from '../MenuDeskTop';
import { MenuMessenger } from '../MenuMessenger';
import { MenuTaskManager } from '../MenuTaskManager';
import styles from './block1.scss';


export function Block1() {
  const menuNum = useSelector<RooState, number>(state => state.menuNum);

  return (
    <ul className={styles.block1}>
      <MenuDeskTop menuNumber={menuNum} />
      <MenuCall menuNumber={menuNum}  />
      <MenuMessenger menuNumber={menuNum} />
      <MenuTaskManager menuNumber={menuNum} />
    </ul>
  );
}
