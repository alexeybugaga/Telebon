import classNames from 'classnames';
import React, { useContext } from 'react';
import { menuStateContext } from '../../context/menuStateContext';
import styles from './taskmanager.scss';

export function TaskManager() {

  const {menuNum, changeMenuNum} = useContext(menuStateContext);

  return (
    <div className={menuNum == 4 ? classNames(styles.taskManagerContent, styles.active) : classNames(styles.taskManagerContent)}>
      Задачник
    </div>
  );
}
