import classNames from 'classnames';
import React, { useState } from 'react';
import { UserIcon } from '../../../../icons';
import styles from './main.scss';

interface IMainProps {
  toggle: number;
}


export function Main( { toggle }: IMainProps ) {
  const [isActive, setActive] = useState(toggle);
  
  return (
    <div className={toggle == 1 ? classNames(styles.main, styles.active) : classNames(styles.main)}>
    <table>
      <thead>
        <tr>
          <th className={styles.left}>
            Сегодня
          </th>
          <th className={styles.middle}>
            Суб
          </th>
          <th className={styles.middle}>
            Дедлайн
          </th>
          <th>
            Создано
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={classNames(styles.left, styles.name)}>
            <button>
              <span className={styles.nameIcon}>
                <UserIcon />
              </span>
              <span>
                Позвонить клиенту #132492, уточнение данных
              </span>
            </button>

          </td>
          <td className={styles.middle}>
            0
          </td>
          <td className={styles.middle}>15:00 | 20.06.2023</td>
          <td className={styles.middle}>Система</td>
        </tr>
        <tr>
          <td className={classNames(styles.left, styles.name)}>
            <button>
              <span className={styles.nameIcon}>
                <UserIcon />
              </span>
              <span>
                Создать личный кабинет Ольге
              </span>
            </button>
          </td>
          <td className={styles.middle}>
            0
          </td>
          <td className={styles.middle}>15:00 | 20.06.2023</td>
          <td className={styles.middle}>Администратор</td>
        </tr>
        <tr>
          <td className={classNames(styles.left, styles.name)}>
            <button>
              <span className={styles.nameIcon}>
                <UserIcon />
              </span>
              <span>
                Прозвонить базу не принятых вызовов от 15.05.2023
              </span>
            </button>
          </td>
          <td className={styles.middle}>
            0
          </td>
          <td className={styles.middle}>15:00 | 20.06.2023</td>
          <td className={styles.middle}>Администратор</td>
        </tr>
        <tr>
          <td className={classNames(styles.left, styles.name)}>
            <button>
              <span className={styles.nameIcon}>
                <UserIcon />
              </span>
              <span>
                Подтвердить запись #2671 на 15.06 +79005050525
              </span>
            </button>
          </td>
          <td className={styles.middle}>
            0
          </td>
          <td className={styles.middle}>15:00 | 20.06.2023</td>
          <td className={styles.middle}>Руководитель</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}
