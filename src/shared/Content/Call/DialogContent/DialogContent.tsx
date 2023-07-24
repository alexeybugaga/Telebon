import React, { useState } from 'react';
import { EIcons, Icon } from '../../../icons';
import styles from './dialogcontent.scss';

export function DialogContent() {
  const [activeNum, setAtiveNum] = useState(1);

  return (
    <div className={styles.dialogContent}>
      <div className={styles.dialogContentTop}>
        <ul className={styles.dialogTopList}>
          <li>
            <span>Первичное</span>
            <Icon name={EIcons.arrow} />
          </li>
          <li>
            <span>Повторное</span>
            <Icon name={EIcons.arrow} />
          </li>
          <li>
            <span>Возврат клиента</span>
            <Icon name={EIcons.arrow} />
          </li>
          <li>
            <span>Продажа</span>
          </li>
        </ul>
        
      </div>
    </div>
  );
}
