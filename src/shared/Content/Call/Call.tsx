import classNames from 'classnames';
import React, { useContext } from 'react';
import { menuStateContext } from '../../context/menuStateContext';
import styles from './call.scss';

export function Call() {
  const {menuNum, changeMenuNum} = useContext(menuStateContext);

  return (
    <div className={menuNum == 2 ? classNames(styles.callContent, styles.active) : classNames(styles.callContent)}>
      Вызов
    </div>
  );
}
