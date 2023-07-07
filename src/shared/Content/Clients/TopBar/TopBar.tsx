import classNames from 'classnames';
import React, { useState } from 'react';
import { EIcons, Icon } from '../../../icons';
import { Modal } from '../../Modal';
import { AddClient } from '../AddClient';
import styles from './topbar.scss';

export function TopBar() {

  const [isAddClient, setIsAddClient] = useState(false);


  return (
    <div className={styles.topbar}>
      <div className={styles.titleWrap}>
        <Icon name={EIcons.clientIcon}/>
        <h2 className={styles.title}>Клиенты</h2>
      </div>
      <ul className={styles.controls}>
        <li className={styles.controlsItem}>
          <button className={classNames(styles.controlsBtn, styles.makeList)}>
            <Icon name={EIcons.processing} />
            <span> Сформировать список </span> 
          </button>
        </li>
        <li className={styles.controlsItem}>
          <button onClick={() => setIsAddClient(true)} className={classNames(styles.controlsBtn, styles.addClient)}>
            <Icon name={EIcons.addplus} />
            <span>Добавить клиента</span>
            {isAddClient && 
              <Modal isActive={isAddClient} onActive={setIsAddClient}>
                <AddClient onActive={() => setIsAddClient(false)}/>
              </Modal>}
          </button>
        </li>
      </ul>
    </div>
  );
}
