import classNames from 'classnames';
import React, { useContext } from 'react';
import { menuStateContext } from '../../context/menuStateContext';
import styles from './messenger.scss';

export function Messenger() {
  const {menuNum, changeMenuNum} = useContext(menuStateContext);
  
  return (
  <div className={menuNum == 3 ? classNames(styles.messengerContent, styles.active) : classNames(styles.messengerContent)}>
    Мессенджер
  </div>
  );
}
