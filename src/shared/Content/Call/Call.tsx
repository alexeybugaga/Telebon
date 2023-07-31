import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { RooState } from '../../../store/reducer';
import styles from './call.scss';
import { ClientInfo } from './ClientInfo';
import { DialogContent } from './DialogContent';
import { OurProductContent } from './OurProductContent';
import { Topbar } from './Topbar';

export function Call() {
  const menuNum = useSelector<RooState, number>(state => state.menuNum);
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className={menuNum == 2 ? classNames(styles.callContent, styles.active) : classNames(styles.callContent)}>
      <Topbar />
      <ul className={styles.tabsBtns}>
          <li className={styles.tabItem}>
            <button onClick={() => setActiveTab(1)} className={activeTab == 1 ? classNames(styles.tabBtn, styles.active) : styles.tabBtn }>
              Диалог
            </button>
          </li>
          <li className={styles.tabItem}>
            <button onClick={() => setActiveTab(2)} className={activeTab == 2 ? classNames(styles.tabBtn, styles.active) : styles.tabBtn }>
              Наш продукт
            </button>
          </li>
      </ul>
      <div className={styles.callContentWrap}>
        {activeTab == 1 && (
          <DialogContent />
        )}
        {activeTab == 2 && (
          <OurProductContent />
        )}
        <ClientInfo />
      </div>
    </div>
  );
}
