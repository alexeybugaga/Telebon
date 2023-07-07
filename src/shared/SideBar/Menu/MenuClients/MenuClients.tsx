import React from 'react';
import { IMenuItemProps } from '../../../interfaces/IMenuItemProps';
import styles from './menuclients.scss';

export function MenuClients({ menuNumber, changeMenuNumber=()=>{}}: IMenuItemProps) {
  return (
    <li>
      <button className={menuNumber == 5 ? styles.active : ''} onClick={()=>changeMenuNumber(5)}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 16.5C1.5 13.1863 4.18629 10.5 7.5 10.5C10.8137 10.5 13.5 13.1863 13.5 16.5H12C12 14.0147 9.98528 12 7.5 12C5.01472 12 3 14.0147 3 16.5H1.5ZM7.5 9.75C5.01375 9.75 3 7.73625 3 5.25C3 2.76375 5.01375 0.75 7.5 0.75C9.98625 0.75 12 2.76375 12 5.25C12 7.73625 9.98625 9.75 7.5 9.75ZM7.5 8.25C9.1575 8.25 10.5 6.9075 10.5 5.25C10.5 3.5925 9.1575 2.25 7.5 2.25C5.8425 2.25 4.5 3.5925 4.5 5.25C4.5 6.9075 5.8425 8.25 7.5 8.25ZM13.7128 11.0271C15.7983 11.9671 17.25 14.064 17.25 16.5H15.75C15.75 14.673 14.6612 13.1003 13.0971 12.3953L13.7128 11.0271ZM13.1972 2.55991C14.6958 3.17777 15.75 4.65271 15.75 6.375C15.75 8.52765 14.1032 10.2939 12 10.4832V8.97345C13.2725 8.79165 14.25 7.698 14.25 6.375C14.25 5.33951 13.6512 4.44452 12.7808 4.01726L13.1972 2.55991Z" fill="currentColor"/>
        </svg>
        <span>Клиенты</span>
      </button>
    </li>
    

  );
}
