import React from 'react';
import { EIcons, Icon } from '../../../icons';
import styles from './clientinfo.scss';

export function ClientInfo() {
  return (
    <div className={styles.clientInfo}>
      <div className={styles.clientInfoTop}>
        <div className={styles.clientData}>
          <span className={styles.userIcon}>
            <Icon name={EIcons.user} />
          </span>
          <div>
            <span>Иванов Иван Иванович</span>
            <span>+7 (900) 200 20-20 (Кировская обл.)</span>
          </div>
        </div>
        <div className={styles.callBtns}>

        </div>
      </div>
    </div>
  );
}
