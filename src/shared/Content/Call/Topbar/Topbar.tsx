import classNames from 'classnames';
import React from 'react';
import { EIcons, Icon } from '../../../icons';
import styles from './topbar.scss';


export function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.titleWrap}>
        <Icon name={EIcons.call}/>
        <h2 className={styles.title}>Вызов</h2>
      </div>
      <ul className={styles.controls}>
        <li className={styles.controlsItem}>
          <button className={classNames(styles.controlsBtn, styles.makeList)}>
            <Icon name={EIcons.processing} />
            <span> Подключить список </span> 
          </button>
        </li>
        <li className={styles.controlsItem}>
          <button onClick={() => {}} className={classNames(styles.controlsBtn, styles.runList)}>
            <Icon name={EIcons.addplus} />
            <span>Запустить список</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
