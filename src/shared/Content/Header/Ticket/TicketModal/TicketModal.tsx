import React from 'react';
import { EIcons, Icon, TelebonTicketIcon } from '../../../../icons';
import styles from './ticketmodal.scss';

interface IItemData {
  name: string;
  title: string;
  comment: string;
  date: string;
}

interface IData {
  list: IItemData[];
}

const data = [
  { name: "Пропущеный вызов", title:"8 (800) 800 80-80", comment: 'Доставка', date: "12.05.2022", icon: EIcons },
  { name: "Записать", title:"Иванов Иван Иванович", comment: 'Доставка', date: "12.05.2022", icon: EIcons },
  { name: "Сообщение ВК", title:"Иванов Иван Иванович", comment: 'Доставка', date: "12.05.2022", icon: EIcons },
  { name: "Заявка с сайта", title:"8 (800) 800 80-80", comment: 'Доставка', date: "12.05.2022", icon: EIcons },
  { name: "Заявка с сайта", title:"8 (800) 800 80-80", comment: 'Доставка', date: "12.05.2022", icon: EIcons },

]

export function TicketModal() {
  return (
    <div className={styles.ticketModal}>
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <span className={styles.icon}>
            <TelebonTicketIcon />
            <span className={styles.counter}>12</span>
          </span>
          <span>
            Тикет
          </span>
        </div>
        <div className={styles.info}>
          <span className={styles.infoText}>
            Среднее время реагирования 
            <span className={styles.infoTime}>
              5:00
            </span>
          </span>
        </div>
      </div>
      <div className={styles.content}>
        <table>
          <thead>
            <tr>
                <th>Наименование</th>
                <th>Имя</th>
                <th>Комментарий</th>
                <th>Дата</th>
            </tr>
          </thead>
          <tbody>
          {data.map((val, key) => {
            return (
                <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.title}</td>
                    <td>{val.comment}</td>
                    <td>{val.date}</td>
                    <td>
                      <button>
                        <Icon name={val.icon.edit} />
                      </button>
                    </td>
                </tr>
            )
          })}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}
