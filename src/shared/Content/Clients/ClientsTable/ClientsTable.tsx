import React, { useState } from 'react';
import styles from './clientstable.scss';

interface IClientData {
  id: string;
  name: string;
  phone: string;
  type_client?: string;
  status?: string;
}

interface IClientsList {

}

export const CLIENTS_LIST:IClientData[] = [
  {id: 'sdf', name: 'Иванов Иван Иванович', phone: '+7(911) 961 25-52', type_client: 'Новый', status: 'Первичный' },
  {id: 'dfgdfg', name: 'Петров Петр Петрович', phone: '+7(911) 961 25-52', type_client: 'Старый', status: 'Вторичный' },
  {id: 'jfgj', name: 'Сидоров Тимофей Иванович', phone: '+7(911) 961 25-52', type_client: 'Очень старый', status: 'Готовый' },
  {id: 'kjhkhj', name: 'Башмачкин Акакий Акакиевич', phone: '+7(911) 961 25-52', type_client: 'Очень новый', status: 'Первичный' },

];

interface IClientsTableProps {
  setClient: (active: string) => void
}

export function ClientsTable({ setClient = () => {} }: IClientsTableProps) {
  const [ActiveClient, setActiveClient] = useState('');
  
  const handleClick = (active: string) => {
    setClient(active);
    setActiveClient(active);
  }
  return (
    <div className={styles.clientsTable}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>Тип клиента</th>
            <th>Статус</th>
          </tr>
          </thead>
          <tbody className={styles.tbody}>
          {CLIENTS_LIST.map(({id, name, phone, type_client, status}) => (
            <tr className={ActiveClient == id ? styles.activeClient: ''} onClick={() => handleClick(id)} key={id}>
              <td>{name}</td>
              <td>{phone}</td>
              <td>{type_client}</td>
              <td>{status}</td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  );
}
