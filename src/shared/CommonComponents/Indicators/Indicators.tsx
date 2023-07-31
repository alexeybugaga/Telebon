import React from 'react';
import { EIcons, Icon } from '../../icons';
import styles from './indicators.scss';

export function Indicators() {
  return (
    <div className={styles.indicators}>
        <div className={styles.titlewrap}>
          <span className={styles.titledata}>Показатели</span>
          <button>
          <Icon name={EIcons.arrownext} />  
          </button>
        </div>
        <ul className={styles.data}>
          <li>
            <span className={styles.title}>
              Кол-во попыток
            </span>
            <span className={styles.linedata}>

            </span>
            <span className={styles.label}>
              100 - 100
            </span>
          </li>
          <li>
            <span className={styles.title}>
              Запись
            </span>
            <span className={`${styles.linedata} ${styles.part}`}>

            </span>
            <span className={styles.label}>
              7-10
            </span>
          </li>
          <li>
            <span className={styles.title}>
              Конверсия
            </span>
            <span className={styles.linedata}>
            </span>
            <span className={styles.label}>
              100%
            </span>
          </li>
        </ul>
    </div>
  );
}
