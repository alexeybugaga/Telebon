import React from 'react';
import { IMenuItemProps } from '../../../interfaces/IMenuItemProps';
import styles from './menutaskmanager.scss';

export function MenuTaskManager({ menuNumber, changeMenuNumber=()=>{}}: IMenuItemProps) {
  return (
    <li>
      <button className={menuNumber == 4 ? styles.active : ''} onClick={()=>changeMenuNumber(4)}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.75 0.75V2.25H11.25V0.75H12.75V2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25H5.25V0.75H6.75ZM15 8.25H3V14.25H15V8.25ZM6 9.75V11.25H4.5V9.75H6ZM9.75 9.75V11.25H8.25V9.75H9.75ZM13.5 9.75V11.25H12V9.75H13.5ZM5.25 3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75H6.75V5.25H5.25V3.75Z" fill="currentColor"/>
        </svg>
        <span>
          Задачник
        </span>
      </button>
    </li>
  );
}
