import React from 'react';
import { useDispatch } from 'react-redux';
import { setMenuNum } from '../../../../store/reducer';
import { IMenuItemProps } from '../../../interfaces/IMenuItemProps';
import styles from './menumessenger.scss';

export function MenuMessenger({ menuNumber }: IMenuItemProps) {
  const dispatch = useDispatch();

  return (
    <li>
      <button className={menuNumber == 3 ? styles.active : ''} onClick={()=>dispatch(setMenuNum(3))}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.46838 15.6181L1.5 16.5L2.38186 12.5316C1.81908 11.4792 1.5 10.2769 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C7.72312 16.5 6.5208 16.181 5.46838 15.6181ZM5.68556 14.0333L6.17571 14.2954C7.03686 14.7559 7.99913 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 10.0009 3.24412 10.9631 3.70462 11.8243L3.96672 12.3144L3.47562 14.5244L5.68556 14.0333ZM5.25 9H6.75C6.75 10.2427 7.75733 11.25 9 11.25C10.2427 11.25 11.25 10.2427 11.25 9H12.75C12.75 11.071 11.071 12.75 9 12.75C6.92894 12.75 5.25 11.071 5.25 9Z" fill="currentColor"/>
        </svg>
        <span>
          Мессенджер
        </span>
      </button>
    </li>
  );
}
