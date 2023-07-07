import React, { useState } from 'react';
import { IMenuItemProps } from '../../../interfaces/IMenuItemProps';
import styles from './menudesktop.scss';


export function MenuDeskTop( { menuNumber, changeMenuNumber=()=>{}}: IMenuItemProps ) {

  console.log(menuNumber)
  return (
    <li className={styles.menuDesktop}>
      <button className={menuNumber == 1 ? styles.active : ''} onClick={()=>changeMenuNumber(1)}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.50453 1.20871L15.5999 6.75H13.37L9 2.77726L4.5 6.86818V14.2501H8.25V15.7501H3.75C3.33579 15.7501 3 15.4143 3 15.0001V8.25007H0.75L8.49547 1.20871C8.78152 0.948658 9.21848 0.948658 9.50453 1.20871ZM10.5 8.25H17.25V13.5H10.5V8.25ZM12 9.75V12H15.75V9.75H12ZM18 15.75H9.75V14.25H18V15.75Z" fill="currentColor"/>
        </svg>
        <span className={styles.title}>
          Рабочий стол
        </span>
      </button>
    </li>
  );
}
