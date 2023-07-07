import React from 'react';
import { EIcons, Icon, ReportIcon } from '../../../../icons';
import styles from './info.scss';

export function Info() {
  return ( 
    <ul className={styles.info}>
      <li className={styles.infoItem}>
        <button className={styles.infoButton}>
          <Icon name={EIcons.processing} />
          <div className={styles.infoButtonText}>
            <span>
              В обработку
            </span>
            <span className={styles.count}>
              12
            </span>
          </div>
        </button>
      </li>
      <li className={styles.infoItem}>
        <button className={styles.infoButton}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.84091 14.25L1.5 16.875V3C1.5 2.58579 1.83579 2.25 2.25 2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V13.5C16.5 13.9142 16.1642 14.25 15.75 14.25H4.84091ZM4.32211 12.75H15V3.75H3V13.7888L4.32211 12.75ZM8.25 7.5H9.75V9H8.25V7.5ZM5.25 7.5H6.75V9H5.25V7.5ZM11.25 7.5H12.75V9H11.25V7.5Z" fill="currentColor"/>
          </svg>
          <div className={styles.infoButtonText}>
            <span>
              Сообщений
            </span>
            <span className={styles.count}>
              12
            </span>
          </div>
        </button>
      </li>
      <li className={styles.infoItem}>
        <button className={styles.infoButton}>
          <ReportIcon />
          <div className={styles.infoButtonText}>
            <span>
              Отчет
            </span>
          </div>
        </button>
      </li>
    </ul>
  );
}
