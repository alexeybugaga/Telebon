import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './runcommandmenu.scss';

export function RunCommandMenu() {

  const [isActive, setActive] = useState(false);

  return (
    <div className={isActive ? classNames(styles.runCommandMenu, styles.active) : styles.runCommandMenu}>
      <ul className={styles.runCommandMenuList}>
        <li>
          <button>
            Добавить задачу
          </button>
        </li>
        <li>
          <button>
            Добавить клиента
          </button>
        </li>
        <li>
          <button>
            Добавить тикет Администратору
          </button>
        </li>
        <li>
          <button>
            Создать отчёт
          </button>
        </li>
        <li>
          <button>
            Поиск
          </button>
        </li>
      </ul>
    </div>
  );
}
