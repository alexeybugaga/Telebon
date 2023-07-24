import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { RooState } from '../../../store/reducer';
import styles from './messenger.scss';

export function Messenger() {
  const menuNum = useSelector<RooState, number>(state => state.menuNum);

  return (
  <div className={menuNum == 3 ? classNames(styles.messengerContent, styles.active) : classNames(styles.messengerContent)}>
    Мессенджер
  </div>
  );
}
