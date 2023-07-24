import React from 'react';
import { useDispatch } from 'react-redux';
import { setMenuNum } from '../../../../store/reducer';
import { IMenuItemProps } from '../../../interfaces/IMenuItemProps';
import styles from './menuproduct.scss';

export function MenuProduct({ menuNumber }: IMenuItemProps) {
  const dispatch = useDispatch();
  return (
    <li>
      <button className={menuNumber == 6 ? styles.active : ''} onClick={()=>dispatch(setMenuNum(6))}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.75 1.84335V3.43614C4.55113 4.32622 3 6.48197 3 9C3 12.3137 5.68629 15 9 15C11.5181 15 13.6738 13.4488 14.5639 11.25H16.1567C15.2009 14.2928 12.3582 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 5.64177 3.70717 2.79905 6.75 1.84335ZM9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 9.25313 16.4875 9.50333 16.4629 9.75H8.25V1.53704C8.49668 1.51254 8.74687 1.5 9 1.5ZM9.75 3.04642V8.25H14.9536C14.6152 5.53596 12.464 3.38486 9.75 3.04642Z" fill="currentColor"/>
        </svg>
        <span>Продукт</span>
      </button> 
    </li>
  );
}
