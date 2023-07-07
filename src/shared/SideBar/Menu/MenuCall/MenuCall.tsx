import React from 'react';
import { IMenuItemProps } from '../../../interfaces/IMenuItemProps';
import styles from './menucall.scss';


export function MenuCall({ menuNumber, changeMenuNumber=()=>{}}: IMenuItemProps) {

  return (
    <li>
      <button className={menuNumber == 2 ? styles.active : ''} onClick={()=>changeMenuNumber(2)}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.75 12.315V14.9671C15.75 15.3608 15.4456 15.6875 15.0529 15.7153C14.7248 15.7384 14.4572 15.75 14.25 15.75C7.62255 15.75 2.25 10.3774 2.25 3.75C2.25 3.54278 2.26159 3.27515 2.28476 2.94713C2.31253 2.55441 2.6392 2.25 3.03289 2.25H5.68508C5.87758 2.25 6.03882 2.39582 6.05815 2.58735C6.0755 2.7593 6.09163 2.89735 6.10655 3.00151C6.25826 4.06104 6.56815 5.06952 7.01152 6.00227C7.08269 6.15199 7.03628 6.33119 6.90139 6.42754L5.28266 7.58385C6.26814 9.88583 8.11417 11.7319 10.4162 12.7174L11.5703 11.1014C11.6679 10.9649 11.8492 10.918 12.0007 10.9899C12.9334 11.4329 13.9418 11.7425 15.0012 11.8938C15.1047 11.9087 15.2419 11.9246 15.4126 11.9419C15.6042 11.9612 15.75 12.1225 15.75 12.315Z" fill="currentColor"/>
        </svg>
        <span>Вызов</span>
      </button> 
    </li>
  );
}
