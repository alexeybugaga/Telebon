import React from 'react';
import { EIcons, Icon } from '../../../icons';
import styles from './addclient.scss';
import { FormAddClient } from './FormAddClient';

interface IAddClientProps {
  onActive: () => void;
}

export function AddClient({ onActive = () => {}}: IAddClientProps) {
  return (
    <div className={styles.addClient}>
      <h3>Новый клиент</h3>
      <div className={styles.breadcrumbs}>
        <span className={styles.first}>Первичное</span>
        <span className={styles.arrow}>
          <Icon name={EIcons.arrow}/>
        </span>
        <span className={styles.second}>Запись</span>
      </div>
      <FormAddClient onActive={onActive} />
    
    </div>
  );
}
