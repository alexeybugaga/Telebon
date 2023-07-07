import React from 'react';
import styles from './userinfo.scss';

export function UserInfo() {
  return (
    <div className={styles.userinfo}>
      <span className={styles.username}>Вася Пупкин</span>
      <span className={styles.useravatar}></span>
    </div>
  );
}
