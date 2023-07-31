import classNames from 'classnames';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { RooState } from '../../../store/reducer';
import styles from './taskmanager.scss';

export function TaskManager() {
  const menuNum = useSelector<RooState, number>(state => state.menuNum);

  return (
    <div className={menuNum == 4 ? classNames(styles.taskManagerContent, styles.active) : classNames(styles.taskManagerContent)}>
      Задачник
    </div>
  );
}
