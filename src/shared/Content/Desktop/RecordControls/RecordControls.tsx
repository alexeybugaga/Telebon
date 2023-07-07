import React from 'react';
import styles from './recordcontrols.scss';

export function RecordControls() {
  return (
    <div className={styles.recordControls}>
      <ul className={styles.recordControlsList}>
        <li className={styles.recordControlsItem}>
          <button>
            В работу
          </button>
        </li>
        <li className={styles.recordControlsItem}>
          <button>
            Задача выполнена
          </button>
        </li>
        <li className={styles.recordControlsItem}>
          <button>
            Редактировать
          </button>
        </li>
      </ul>
    </div>
  );
}
