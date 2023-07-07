import React, { useContext, useEffect } from 'react';
import { menuStateContext } from '../../../context/menuStateContext';
import { IMenuItemProps } from '../../../interfaces/IMenuItemProps';
import { MenuCall } from '../MenuCall';
import { MenuDeskTop } from '../MenuDeskTop';
import { MenuMessenger } from '../MenuMessenger';
import { MenuTaskManager } from '../MenuTaskManager';
import styles from './block1.scss';


export function Block1() {
  const {menuNum, changeMenuNum} = useContext(menuStateContext);

  return (
    <ul className={styles.block1}>
      <MenuDeskTop menuNumber={menuNum} changeMenuNumber={changeMenuNum} />
      <MenuCall menuNumber={menuNum} changeMenuNumber={changeMenuNum} />
      <MenuMessenger menuNumber={menuNum} changeMenuNumber={changeMenuNum}/>
      <MenuTaskManager menuNumber={menuNum} changeMenuNumber={changeMenuNum} />
    </ul>
  );
}
