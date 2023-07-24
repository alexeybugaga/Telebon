import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { RooState } from '../../../store/reducer';
import { menuStateContext } from '../../context/menuStateContext';
import { ClientInfo } from './ClientInfo';
import styles from './clients.scss';
import { ClientsTable, CLIENTS_LIST } from './ClientsTable';
import { TopBar } from './TopBar';

export function Clients() {
  const [ActiveClient, setActiveClient] = useState('');
  const menuNum = useSelector<RooState, number>(state => state.menuNum);

  const handleClick = (active: string) => {
    setActiveClient(active);
  };

  return (
    <div className={menuNum == 5 ? classNames(styles.clientsContent, styles.active) : classNames(styles.clientsContent)}>
      <TopBar />
      <div className={styles.clientsContentWrap}>
        <ClientsTable setClient={handleClick}/>
        <ClientInfo {...CLIENTS_LIST[CLIENTS_LIST.findIndex(x => x.id === ActiveClient)]} />
      </div>
    </div>
  );
}
