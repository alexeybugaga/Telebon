import classNames from 'classnames';
import React, { useContext } from 'react';
import { menuStateContext } from '../../context/menuStateContext';
import { Header } from '../Header';
import { Content } from './Content';
import styles from './desktop.scss';
import { TopBar } from './TopBar';


export function Desktop( ) {
  const {menuNum, changeMenuNum} = useContext(menuStateContext);

  return (
    <div className={menuNum == 1 ? classNames(styles.desktopContent, styles.active) : classNames(styles.desktopContent)}>
      <TopBar />
      <Content />
    </div>
  );
}
