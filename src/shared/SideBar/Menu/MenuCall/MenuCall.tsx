import React from 'react';
import { useDispatch } from 'react-redux';
import { setMenuNum } from '../../../../store/reducer';
import { EIcons, Icon } from '../../../icons';
import { IMenuItemProps } from '../../../interfaces/IMenuItemProps';
import styles from './menucall.scss';


export function MenuCall({ menuNumber }: IMenuItemProps) {
  const dispatch = useDispatch();

  return (
    <li>
      <button className={menuNumber == 2 ? styles.active : ''} onClick={()=>dispatch(setMenuNum(2))}>
        <Icon name={EIcons.call} />
        <span>Вызов</span>
      </button> 
    </li>
  );
}
