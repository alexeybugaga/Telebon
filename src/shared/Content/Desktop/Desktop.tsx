import classNames from 'classnames';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { RooState } from '../../../store/reducer';
import { Content } from './Content';
import styles from './desktop.scss';
import { TopBar } from './TopBar';


export function Desktop( ) {
  const menuNum = useSelector<RooState, number>(state => state.menuNum);

  return (
    <div className={menuNum == 1 ? classNames(styles.desktopContent, styles.active) : classNames(styles.desktopContent)}>
      <TopBar />
      <Content />
    </div>
  );
}
